// import React, { useEffect, useRef, useState } from "react"
// import { motion } from "framer-motion"

// export default function NoticeBoard() {
//     const notices = Array.from({ length: 10 }, (_, i) => ({
//         id: i + 1,
//         date: `2025-05-${String(i + 1).padStart(2, "0")}`,
//         title: `Notice Title ${i + 1}`,
//         detail: `This is the detail of notice number ${i + 1}. It contains important information for users.`,
//       }))

//   const [startIndex, setStartIndex] = useState(0)
//   const itemHeight = 120 // height of a single notice card in px

//   const intervalRef = useRef(null)

//   useEffect(() => {
//     intervalRef.current = setInterval(() => {
//       setStartIndex((prevIndex) => (prevIndex + 1) % notices.length)
//     }, 2500)

//     return () => clearInterval(intervalRef.current)
//   }, [])

//   // Generate 4 visible notices by rotating the list
//   const visibleNotices = Array.from({ length: 4 }, (_, i) => {
//     return notices[(startIndex + i) % notices.length]
//   })

//   return (
//     <div className="bg-white shadow-lg rounded-xl py-6 px-4 border-t-4 border-blue-500 transition-all transform hover:scale-105 hover:shadow-xl">
//       <h3 className="text-xl font-semibold text-red-500 mb-4 flex items-center space-x-2">
//         <span role="img" aria-label="pin">📌</span>
//         <span>Notice Board</span>
//       </h3>

//       <div className="relative h-[480px] overflow-hidden">
//         <motion.div
//           key={startIndex} // This ensures smooth re-animation on index change
//           initial={{ y: itemHeight }}
//           animate={{ y: 0 }}
//           exit={{ y: -itemHeight }}
//           transition={{ duration: 0.6, ease: "easeInOut" }}
//         >
//           <div className="space-y-4">
//             {visibleNotices.map((notice) => (
//               <div
//               key={notice?.id}
//               className="border-b pb-4 last:pb-0 bg-blue-100/40 p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
//             >
//                 <div className="flex justify-between items-center mb-2">
//                 <div className="text-xs text-gray-500 font-medium">
//                   {notice.date}
//                 </div>
//                 <div className="text-xs font-medium text-gray-500">Updated</div>
//               </div>
//               <div className="font-semibold text-gray-800 mb-2">
//                 {notice.title}
//               </div>
//               <p className="text-gray-600 mt-1">{notice.detail}</p>
//             </div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   )
// }

import React, { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

export default function NoticeBoard() {
  const notices = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    date: `2025-05-${String(i + 1).padStart(2, "0")}`,
    title: `Notice Title ${i + 1}`,
    detail: `This is the detail of notice number ${i + 1}. It contains important information for users.`,
  }))

  const [startIndex, setStartIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % notices.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [notices.length])

  // Clone extra for smooth looping
  const visibleNotices = [...notices, ...notices.slice(0, 4)]

  return (
    <div className="bg-white shadow-lg rounded-xl py-6 px-4 border-t-4 border-blue-500 transition-all transform hover:scale-105 hover:shadow-xl">
      <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center space-x-2">
        <span role="img" aria-label="pin">📌</span>
        <span>Notice Board</span>
      </h3>

      <div className="relative h-[490px] overflow-hidden">
        <motion.div
          animate={{ y: -startIndex * 122 }} // Adjust scroll height per card
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="space-y-2"
        >
          {visibleNotices.map((notice, idx) => (
            <div
              key={idx}
              className="border-b pb-4 last:pb-0 bg-blue-100/40 p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex justify-between items-center mb-2">
                <div className="text-xs text-gray-500 font-medium">
                  {notice.date}
                </div>
                <div className="text-xs font-medium text-gray-500">Updated</div>
              </div>
              <div className="font-semibold text-gray-800 mb-2">
                {notice.title}
              </div>
              <p className="text-gray-600 mt-1">{notice.detail}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
