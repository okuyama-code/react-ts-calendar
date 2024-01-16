import clsx from "clsx";

// PropsWithChildren は、この子要素を含む Props を表現するための型 extend 拡げる
interface Props extends React.PropsWithChildren {
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const Cell: React.FC<Props> = ({
  onClick,
  className,
  children,
  isActive = false,
}) => {
  return (
    <div
      onClick={!isActive ? onClick : undefined}
      className={clsx(
        "h-10 border-b border-r flex items-center justify-center select-none transition-colors",
        {
          "cursor-pointer hover:bg-gray-100 active:bg-gray-200":
            !isActive && onClick,
          "font-bold text-white bg-red-300": isActive,
        },
        className
      )}
    >
      {children}
    </div>
  );
}

export default Cell
