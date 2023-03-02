import { memo, useEffect } from 'react'

import { useTranslation } from 'react-i18next'

import {
  ProfileCard,
  fetchProfileData,
  profileReducer
} from 'entities/Profile/index'

import { classNames } from 'shared/lib/classNames/classNames'
import {
  DynamicModuleLoader,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

const reducers: ReducersList = {
  profile: profileReducer
}

interface profilePageProps {
  className?: string
}

const ProfilePage = memo(({ className }: profilePageProps) => {
  const { t } = useTranslation()

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  )
})
export default ProfilePage
