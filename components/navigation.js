import Link from 'next/link';

export const Navigation = () => {
  return (
    <div className="row-container">
      <div className="column-container pink-background">
        <header>
          <Link href="/about">
            <a>
              <h2 className="pink-text-shadow">Julia</h2>
            </a>
          </Link>
        </header>
      </div>
      <div className="column-container green-background">
        <header>
          <Link href="/about">
            <a>
              <h2 className="green-text-shadow">Astrid</h2>
            </a>
          </Link>
        </header>
      </div>
    </div>
  );
};
