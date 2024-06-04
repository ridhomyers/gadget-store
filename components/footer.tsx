import Link from "next/link";

const Footer = () => {
  const year: number = new Date().getFullYear();
  return (
    <footer className="bg-white w-full border-t absolute bottom-0">
      <div className="py-10">
        <p className="text-center text-xs text-black">
          &copy; {year} Gadget Store, Inc. All rights reserved.
        </p>
        <p className="text-center text-xs text-black">
          Made by&nbsp;
          <Link
            className="text-sky-500"
            href="https://instagram.com/ridhorfai"
            rel="noopener noreferrer"
            target="_blank"
          >
            Ridho Rifai.
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
