import style from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={style.footer}>
      <footer>
        <p>{`Ⓒ${currentYear} AreionBrakes Inc. `}</p>
      </footer>
    </div>
  );
};

export default Footer;
