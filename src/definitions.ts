import type { PluginListenerHandle } from "@capacitor/core";

export interface CallBackData {
  data: String;
}

export type CallBackListener = (event: CallBackData) => void;


export interface samplePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  
  addListener(
    eventName: 'ApplicationGoingToBackground',
    listenerFunc: CallBackListener,
  ): Promise<PluginListenerHandle> & PluginListenerHandle;
}
