import type { Component, VNodeProps, AllowedComponentProps } from "vue";

export type ComponentProps<C extends Component> = C extends new (...args: any) => any
  ? Omit<InstanceType<C>['$props'], keyof VNodeProps | keyof AllowedComponentProps>
  : never;

export interface Modal {
  id: string
  component: Component
  props: unknown
  onClose: (value: unknown) => void
}
