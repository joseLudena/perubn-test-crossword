const GridDisabled = () => {
   const countblocks = 9;
   return (
      <div className="w-full h-full grid grid-cols-3 grid-rows-3 bg-gradient-to-b from-orange-950 bg-orange-brick border-grey-cement rounded-sm">
         {Array.from({ length: countblocks }, (_, i) => (
            <div key={i} className="border-grey-cement"></div>
         ))}
      </div>
   );
};

export default GridDisabled;
