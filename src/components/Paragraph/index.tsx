import React from 'react';
import parse, { HTMLReactParserOptions } from 'html-react-parser';
import { Element } from 'domhandler/lib/node';

export interface Props {
  text: string;
}

const Paragraph: React.FC<Props> = ({ text }: Props) => {
  // TODO: Add images to parser
  const options: HTMLReactParserOptions = {
    replace: domNode => {
      if (!(domNode instanceof Element)) return null;

      // if (name === 'a') {
      //   return (
      //     <strong>
      //       <a href={attribs.href}>{domToReact(children, options)}</a>
      //     </strong>
      //   );
      // }

      // if (name === 'h1') {
      //   return (
      //     <TextWrapper
      //       as={H1}
      //       alignParagraph={alignParagraph}
      //       justifyParagraph={justifyParagraph}
      //     >
      //       {domToReact(children, options)}
      //     </TextWrapper>
      //   );
      // }

      // if (name === 'h2')
      //   return (
      //     <TextWrapper
      //       as={H2}
      //       alignParagraph={alignParagraph}
      //       justifyParagraph={justifyParagraph}
      //     >
      //       {domToReact(children, options)}
      //     </TextWrapper>
      //   );

      // if (name === 'h3')
      //   return (
      //     <TextWrapper
      //       as={H3}
      //       alignParagraph={alignParagraph}
      //       justifyParagraph={justifyParagraph}
      //     >
      //       {domToReact(children, options)}
      //     </TextWrapper>
      //   );

      // if (name === 'p')
      //   return (
      //     <TextWrapper
      //       alignParagraph={alignParagraph}
      //       justifyParagraph={justifyParagraph}
      //     >
      //       {domToReact(children, options)}
      //     </TextWrapper>
      //   );
      // if (name === 'ul')
      //   return (
      //     <TextWrapper
      //       as="ul"
      //       alignParagraph={alignParagraph}
      //       justifyParagraph={justifyParagraph}
      //     >
      //       {domToReact(children, options)}
      //     </TextWrapper>
      //   );
      // if (name === 'ol')
      //   return (
      //     <TextWrapper
      //       as="ol"
      //       alignParagraph={alignParagraph}
      //       justifyParagraph={justifyParagraph}
      //     >
      //       {domToReact(children, options)}
      //     </TextWrapper>
      //   );
      // if (name === 'blockquote')
      //   return (
      //     <TextWrapper
      //       as="blockquote"
      //       style={{display: 'flex', alignItems:"center", minHeight: '50px'}}
      //       alignParagraph={alignParagraph}
      //       justifyParagraph={justifyParagraph}
      //     >
      //       <YangQuotes width={20} height={20} style={{ alignSelf: 'flex-start' }} />
      //       {/* Arbitrary div to group any html that may split up 'children' */}
      //       <div>
      //         {domToReact(children, options)}
      //       </div>
      //       <YinQuotes width={20} height={20} style={{ alignSelf: 'flex-end' }} />
      //     </TextWrapper>
      //   );

      // if (attribs.class === 'ql-size-huge')
      //   return <Span size="huge">{domToReact(children, options)}</Span>;

      // if (attribs.class === 'ql-size-large')
      //   return <Span size="large">{domToReact(children, options)}</Span>;

      // if (attribs.class === 'ql-size-small')
      //   return <Span size="small">{domToReact(children, options)}</Span>;
    },
  };

  return <article>{parse(text, options)}</article>;
};

export default Paragraph;
