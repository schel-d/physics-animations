import { AnimationOptionValues } from "../animation-options";
import { AnimationRenderer, centerFrame } from "../animation-renderer";
import { WaveFunction } from "./functions";
import { WaveAnimationOptions } from "./wave-animation";

const width = 500;
const height = 250;
const horizontalPadding = 30;
const effectiveWidth = width - horizontalPadding * 2;
const amplitude = height * 0.5;
const longitudinalAmplitude = effectiveWidth * 0.1;

const waveResolution = 100;
const particleCount = 21;

const superpositionColor = "#ffffffa0";
const waveThickness = 2;
const particleColor = "#ffffff";
const particleSize = 5;
const endpointSize = 10;
const subwaveColors = ["#ff0000a0", "#00ff00a0"];
const subwaveOffset = 2;

export type EndpointType = "fixed" | "free" | "none";

export class WaveAnimationRenderer extends AnimationRenderer<WaveAnimationOptions> {
  constructor(
    readonly waves: WaveFunction[],
    readonly leftEnd: EndpointType,
    readonly rightEnd: EndpointType
  ) {
    super();
  }

  render(
    ctx: CanvasRenderingContext2D,
    time: number,
    canvasWidth: number,
    canvasHeight: number,
    options: AnimationOptionValues<WaveAnimationOptions>
  ): void {
    const showSuperposition = options.requireBoolean(
      WaveAnimationOptions.superposition
    );
    const showComponents = options.requireBoolean(
      WaveAnimationOptions.components
    );
    const showParticles = options.requireBoolean(
      WaveAnimationOptions.particles
    );
    const showAsLongitudinal = options.requireBoolean(
      WaveAnimationOptions.longitudinal
    );

    ctx.save();
    centerFrame(ctx, canvasWidth, canvasHeight, width, height);
    ctx.translate(0, height / 2);

    if (showComponents) {
      const waveCount = this.waves.length;
      this.waves.forEach((wave, i) => {
        const color = subwaveColors[i % subwaveColors.length];
        const offset = i * subwaveOffset - (waveCount * subwaveOffset) / 2;
        drawWave(ctx, wave, time, color, "none", "none", offset);
      });
    }

    const superposition: WaveFunction = (x, t) => {
      let y = 0;
      for (let wave of this.waves) {
        y += wave(x, t);
      }
      return y;
    };

    if (showSuperposition) {
      const color = superpositionColor;
      const particlesVisible = showAsLongitudinal && showParticles;
      const leftEnd = particlesVisible ? "none" : this.leftEnd;
      const rightEnd = particlesVisible ? "none" : this.rightEnd;
      drawWave(ctx, superposition, time, color, leftEnd, rightEnd, 0);
    }

    if (showParticles) {
      const color = particleColor;
      const longitudinal = showAsLongitudinal;
      const ignoreEnds = longitudinal || !showSuperposition;
      const left = this.leftEnd == "none" || ignoreEnds;
      const right = this.rightEnd == "none" || ignoreEnds;
      drawParticles(ctx, superposition, time, color, longitudinal, left, right);
    }

    ctx.restore();
  }
}

function drawWave(
  ctx: CanvasRenderingContext2D,
  wave: WaveFunction,
  time: number,
  color: string,
  leftEnd: EndpointType,
  rightEnd: EndpointType,
  offset: number
) {
  ctx.strokeStyle = color;
  ctx.lineWidth = waveThickness;
  ctx.beginPath();

  for (let i = 0; i < waveResolution; i++) {
    const percentage = i / (waveResolution - 1);
    const { x, y } = getCoordinates(percentage, wave(percentage, time), offset);

    if (i == 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }
  ctx.stroke();

  if (leftEnd != "none") {
    const { x, y } = getCoordinates(0, wave(0, time), offset);
    drawEndpoint(ctx, x, y, leftEnd == "free");
  }
  if (rightEnd != "none") {
    const { x, y } = getCoordinates(1, wave(1, time), offset);
    drawEndpoint(ctx, x, y, rightEnd == "free");
  }
}

function drawEndpoint(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  hollow: boolean
) {
  if (hollow) {
    ctx.strokeStyle = "#ffffff";
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.ellipse(x, y, endpointSize, endpointSize, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  } else {
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.ellipse(x, y, endpointSize, endpointSize, 0, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawParticles(
  ctx: CanvasRenderingContext2D,
  wave: WaveFunction,
  time: number,
  color: string,
  showLongitudinal: boolean,
  drawLeft: boolean,
  drawRight: boolean
) {
  ctx.fillStyle = color;

  const first = drawLeft ? 0 : 1;
  const last = drawRight ? particleCount : particleCount - 1;
  for (let i = first; i < last; i++) {
    const percentage = i / (particleCount - 1);
    let { x, y } = getCoordinates(percentage, 0, 0);

    if (!showLongitudinal) {
      y += wave(percentage, time) * amplitude;
    } else {
      x += wave(percentage, time) * longitudinalAmplitude;
    }

    ctx.beginPath();
    ctx.ellipse(x, y, particleSize, particleSize, 0, 0, Math.PI * 2);
    ctx.fill();
  }
}

function getCoordinates(percentage: number, height: number, offset: number) {
  return {
    x: horizontalPadding + percentage * effectiveWidth,
    y: height * amplitude + offset,
  };
}
