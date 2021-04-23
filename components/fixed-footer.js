import Link from 'next/link';

export const FixedFooter = () => {
  return (
    <div className="fixed-footer">
      <Link href="/story">
        <a className="black-shadow">
          <h3>
            Maneras de no
            <br />
            querer a tu
            <br /> hermana
          </h3>
        </a>
      </Link>
    </div>
  );
};
