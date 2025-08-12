const ColorPalette = () => {
  const purpleClasses = [
    "bg-purple-100",
    "bg-purple-200",
    "bg-purple-300",
    "bg-purple-400",
    "bg-purple-500",
    "bg-purple-600",
    "bg-purple-700",
    "bg-purple-800",
    "bg-purple-900",
  ];

  const beigeClasses = [
    "bg-beige-100",
    "bg-beige-200",
    "bg-beige-300",
    "bg-beige-400",
    "bg-beige-500",
  ];

  const blueClasses = [
    "bg-blue-100",
    "bg-blue-200",
    "bg-blue-300",
    "bg-blue-400",
    "bg-blue-500",
  ];

  const greenClasses = [
    "bg-green-100",
    "bg-green-200",
    "bg-green-300",
    "bg-green-400",
    "bg-green-500",
  ];

  const grayscaleClasses = [
    "bg-grayscale-100",
    "bg-grayscale-200",
    "bg-grayscale-300",
    "bg-grayscale-400",
    "bg-grayscale-500",
    "bg-grayscale-600",
    "bg-grayscale-700",
    "bg-grayscale-800",
    "bg-grayscale-900",
  ];

  const colors = [
    { name: "White", className: "bg-white border border-gray-300" },
    { name: "Black", className: "bg-black" },
    { name: "Error", className: "bg-error" },
    { name: "Surface", className: "bg-surface" },
  ];
  return (
    <>
      {/* purple */}
      <div className="flex flex-col items-start gap-2 p-4">
        <div className="text-sm font-medium">Purple</div>
        <div className="flex">
          {purpleClasses.map((cls) => (
            <div key={cls} className={`h-10 w-20 ${cls}`} />
          ))}
        </div>
      </div>

      {/* beige */}
      <div className="flex flex-col items-start gap-2 p-4">
        <div className="text-sm font-medium">Beige</div>
        <div className="flex">
          {beigeClasses.map((cls) => (
            <div key={cls} className={`h-10 w-20 ${cls}`} />
          ))}
        </div>
      </div>

      {/* Blue */}
      <div className="flex flex-col items-start gap-2 p-4">
        <div className="text-sm font-medium">Blue</div>
        <div className="flex">
          {blueClasses.map((cls) => (
            <div key={cls} className={`h-10 w-20 ${cls}`} />
          ))}
        </div>
      </div>

      {/* Green */}
      <div className="flex flex-col items-start gap-2 p-4">
        <div className="text-sm font-medium">Green</div>
        <div className="flex">
          {greenClasses.map((cls) => (
            <div key={cls} className={`h-10 w-20 ${cls}`} />
          ))}
        </div>
      </div>

      {/* Grayscale */}
      <div className="flex flex-col items-start gap-2 p-4">
        <div className="text-sm font-medium">Grayscale</div>
        <div className="flex">
          {grayscaleClasses.map((cls) => (
            <div key={cls} className={`h-10 w-20 ${cls}`} />
          ))}
        </div>
      </div>

      {/* White,Black,Error,Surface */}
      <div className="p-4">
        <div className="flex gap-6">
          {colors.map((color, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="ml-[-20px] font-normal">{color.name}</span>
              <div className={`${color.className} w-16 h-8`}></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default ColorPalette;
