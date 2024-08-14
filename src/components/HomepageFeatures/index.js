import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: 'CompTIA',
    link: "/docs/category/comptia",
    Svg: require('@site/static/img/security.svg').default,
    description: (
      <>
        CompTIA Security+ Notes
      </>
    ),
  },
  {
    title: 'Notes',
    link: "docs/category/notes",
    Svg: require('@site/static/img/notes.svg').default,
    description: (
      <>
        HomeLab Configuration Notes
      </>
    ),
  },
  // {
  //   title: 'Notes',
  //   link: "docs/category/notes",
  //   Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       notes
  //     </>
  //   ),
  // },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3"><Link to={link}>{title}</Link></Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        {/* <div className="row"> */}
        <div className={clsx('row', styles.row)}>
        {/* FeatureList.slice(0,2).map */}
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
