import { classNames } from 'shared/lib/classNames/classNames'

import { Loader } from '../Loader/Loader'
import cls from './PageLoader.module.scss'

interface PageLoaderProps {
  className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={classNames(cls.pageloader, {}, [className])}>
      <Loader />
    </div>
  )
}
