const Grid = (id) => {
   return (
      <div key={id} id={id} className="aspect-square flex items-center justify-center relative bg-gray-900 border border-gray-600 rounded-sm cursor-pointer text-xl font-semibold text-gray-100 transition-colors duration-200" >
      </div>
   )
}

export default Grid;