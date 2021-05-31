export interface VideoOptions {
  /** 视频的src */
  src: string;
  /** 是否循环播放 */
  loop?: boolean;
  /** 是否自动播放 */
  autoPlay?: boolean;
  /** 是否静音 */
  muted?: boolean;
  /** 是否使用浏览器自带的 control */
  controls?: boolean;
  /** 视频宽 */
  width?: number | string;
  /** 视频高 */
  height?: number | string;
  /** 封面图:{url:封面图路径,icon:封面图icon} */
  cover?: { url: string; icon?: React.ReactNode };
}

export interface BaseProps {
  className?: string;
  style?: React.CSSProperties;
}
