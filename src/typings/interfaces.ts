import {
  CSSProperties,
  DOMAttributes,
  HTMLAttributes,
  ReactNode,
  RefAttributes,
} from 'react';
export interface DefaultProps
  extends HTMLAttributes<any>,
    DOMAttributes<any>,
    RefAttributes<any> {
  id?: string;
  title?: string;
  style?: CSSProperties;
  children?: ReactNode;
}
