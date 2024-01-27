import { GithubUser } from '../../types/types';
import * as S from './style';
import { FC } from 'react';
import { InfoItem, InfoItemProps } from '../InfoItem/InfoItem';
import {
  CompanyIcon,
  LocationIcon,
  WebsiteIcon,
  TwitterIcon
} from '../../assets/index';

interface UserInfoProps
  extends Pick<
    GithubUser,
    'blog' | 'company' | 'location' | 'twitter_username'
  > {}

export const UserInfo: FC<UserInfoProps> = ({
  blog,
  company,
  location,
  twitter_username
}: UserInfoProps) => {
  const items: InfoItemProps[] = [
    {
      icon: <LocationIcon />,
      text: location
    },
    {
      icon: <WebsiteIcon />,
      text: blog,
      isLink: true
    },
    {
      icon: <TwitterIcon />,
      text: twitter_username
    },
    {
      icon: <CompanyIcon />,
      text: company
    }
  ];

  return (
    <S.Wrapper>
      <S.UserInfo>
        {items.map((item, index) => (
          <InfoItem key={index} {...item} />
        ))}
      </S.UserInfo>
    </S.Wrapper>
  );
};
