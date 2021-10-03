import React from 'react';

export default (props: any): JSX.Element => {
  // const {
  //   data: {
  //     strapi: { artist },
  //   },
  // } = props;
  // console.log(artist);
  console.log(props.data);

  return (
    <>
      <h2>artist</h2>
      <h2>page</h2>
    </>
  );
};
