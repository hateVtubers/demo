type Props = {
  onClick: any;
  content: string;
};

export const LoginButtons = ({ onClick, content }: Props) => {
  return (
    <button
      onClick={onClick}
      className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded transition-colors"
    >
      login with {content}
    </button>
  );
};
