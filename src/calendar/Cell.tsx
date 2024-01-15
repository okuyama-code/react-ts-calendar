import clsx from "clsx";

// PropsWithChildren は、この子要素を含む Props を表現するための型 extend 拡げる
interface Props extends React.PropsWithChildren {
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const Cell: React.FC<Props> = ({ className ,children }) => {
  return (
    <div className={clsx("h-12 flex items-center justify-center border-b border-r", className)}>{children}</div>
  )
}

export default Cell
