import type { ReactElement } from "react";

export type Component<Props extends object = object> = (props: Props) => ReactElement;