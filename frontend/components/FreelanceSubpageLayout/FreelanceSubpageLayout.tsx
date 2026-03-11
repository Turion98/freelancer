import { FreelanceHeader } from "../FreelanceHeader/FreelanceHeader";
import s from "./FreelanceSubpageLayout.module.scss";

type Props = {
  children: React.ReactNode;
};

export function FreelanceSubpageLayout({ children }: Props) {
  return (
    <div className={s.root}>
      <FreelanceHeader />
      <main>{children}</main>
    </div>
  );
}
