import classNames from 'classnames';

export default function Skeleton({ times, className }) {
  const outerClassNames = classNames(
    'relative',
    'overflow-hidden',
    'rounded',
    'bg-gray-200',
    'mb-2.5',
    className
  );
  const innerClassNames = classNames(
    'animate-shimmer',
    'absolute',
    'inset-0',
    '-translate-x-full',
    'bg-gradient-to-r',
    'from-gray-200',
    'via-white',
    'to-gray-200'
  );

  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      console.log(_);
      return (
        <div key={i} className={outerClassNames}>
          <div className={innerClassNames}></div>
        </div>
      );
    });

  return boxes;
}
