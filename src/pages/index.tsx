import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const [alltables, setAlltables] = React.useState([]);

  React.useEffect(() => {
    fetch('https://apianimalshelters.lacontroller.io/alltables')
      .then((response) => response.json())
      .then((data) =>
        setAlltables(
          data.map((eachTable) => {
            return {
              ...eachTable,
              data: eachTable.data.filter((x) => {
                if (x.amount) {
                  return true;
                } else {
                  if (x.amount === null) {
                    return false;
                  } else {
                    return true;
                  }
                }
              }),
            };
          })
        )
      );
  }, []);

  React.useEffect(() => {
    //console.log(alltables);
  }, [alltables]);

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main></main>
    </Layout>
  );
}
