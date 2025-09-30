import React from 'react'

const Separator = () => {
  return (
    <div className="flex items-center w-full my-6">
      {/* เส้นซ้าย */}
      <div className="flex-grow h-px bg-input" />

      {/* ข้อความตรงกลาง */}
      <span className="px-4 text-sm font-medium text-muted-foreground">
        or
      </span>

      {/* เส้นขวา */}
      <div className="flex-grow h-px bg-input" />
    </div>
  )
}

export default Separator
