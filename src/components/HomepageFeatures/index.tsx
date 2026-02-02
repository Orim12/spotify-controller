import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Cross-Platform Support',
    Svg: require('@site/static/img/spotify_cross_platform.svg').default,
    description: (
      <>
        Works seamlessly on both Windows 10/11 and macOS. Uses native system APIs
        for optimal performance and reliability.
      </>
    ),
  },
  {
    title: 'No API Required',
    Svg: require('@site/static/img/spotify_no_api.svg').default,
    description: (
      <>
        Control Spotify directly without any external APIs, OAuth flows, or internet connection.
        Everything works locally for maximum privacy and speed.
      </>
    ),
  },
  {
    title: 'Simple Integration',
    Svg: require('@site/static/img/spotify_integration.svg').default,
    description: (
      <>
        Install from VS Code Marketplace and start controlling Spotify immediately.
        Sidebar view with play controls and track information.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
