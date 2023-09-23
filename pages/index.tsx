import { Inter } from 'next/font/google'
import { PictureList } from './components/pictureList'
import classNames from "classnames";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1
          className={classNames(
            "text-red-900 text-7xl font-serif drop-shadow-md",
            "justify-center text-center",
            "p-10"
          )}
      >
        Bedlam Demonologist Quick Puzzle Guide
      </h1>
      <PictureList></PictureList>
    </div>
  )
}
