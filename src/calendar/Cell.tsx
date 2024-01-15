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
  // isActive,
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        // 最初の引数：基本的なクラス名やスタイル
        "h-12 flex items-center justify-center border-b border-r",
         // 2番目の引数：onClick プロパティが存在する場合、ホバー時やアクティブ時のスタイルを追加
        { "cursor-pointer hover:bg-gray-100 active:bg-gray-200": !!onClick},
        // 3番目の引数：親コンポーネントから渡された追加のクラス名（既存のクラス名と組み合わせる）
        className
      )}
    >
        {children}
      </div>
  )
}

export default Cell
