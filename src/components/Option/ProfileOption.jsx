const ProfileOption = ({ image, alt, selected, onClick }) => {
  return (
    <button
      type="button"
      className={`relative w-[40px] h-[40px] md:w-[56px] md:h-[56px] border-1 border-grayscale-300 rounded-full overflow-hidden
        ${
          selected
            ? "after:content-[''] after:w-full after:h-full after:block after:bg-white/70 after:absolute after:top-0 after:left-0 after:bg-[url('./assets/icEnabled.svg')] after:bg-size-[20px] md:after:bg-size-[24px] after:bg-no-repeat after:bg-center after:z-10"
            : ""
        }
      `}
      aria-pressed={selected}
      onClick={onClick}
    >
      <img src={image} alt={alt} className="w-full h-full" draggable={false} />
    </button>
  );
};

export default ProfileOption;
