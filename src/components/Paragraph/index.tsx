import { Element } from 'domhandler/lib/node';
import parse, { domToReact, HTMLReactParserOptions } from 'html-react-parser';
import React from 'react';
import { Anchor, Span } from '../Elements';

export interface Props {
  text: string | null;
}

const options: HTMLReactParserOptions = {
  replace: domNode => {
    if (!(domNode instanceof Element)) return null;
    const { name, children, attribs } = domNode;
    switch (name) {
      case 'a':
        return (
          <strong>
            <Anchor to={attribs.href}>{domToReact(children, options)}</Anchor>
          </strong>
        );

      case 'h1':
        return <h1>{domToReact(children, options)}</h1>;

      case 'h2':
        return <h2>{domToReact(children, options)}</h2>;

      case 'h3':
        return <h3>{domToReact(children, options)}</h3>;

      case 'h4':
        return <h4>{domToReact(children, options)}</h4>;

      case 'h5':
        return <h5>{domToReact(children, options)}</h5>;

      case 'h6':
        return <h6>{domToReact(children, options)}</h6>;

      case 'strong':
        return <strong>{domToReact(children, options)}</strong>;

      case 'p':
        return <p>{domToReact(children, options)}</p>;

      case 'ul':
        return <ul>{domToReact(children, options)}</ul>;
      case 'ol':
        return <ol>{domToReact(children, options)}</ol>;
    }

    if (attribs.class === 'ql-size-huge')
      return <Span size="huge">{domToReact(children, options)}</Span>;

    if (attribs.class === 'ql-size-large')
      return <Span size="large">{domToReact(children, options)}</Span>;

    if (attribs.class === 'ql-size-small')
      return <Span size="small">{domToReact(children, options)}</Span>;

    return null;
  },
};

const Paragraph = ({ text }: Props): JSX.Element | null => {
  if (text === null) return null;

  return <>{parse(text, options)}</>;
};

export default Paragraph;
