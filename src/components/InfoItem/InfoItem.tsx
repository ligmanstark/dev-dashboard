import * as S from './style';

export interface InfoItemProps {
  icon: React.ReactNode;
  text?: string | null;
  isLink?: boolean;
}

export const InfoItem = ({ icon, isLink, text }: InfoItemProps) => {
  const currentText = text || 'Not Available';
  let currentHref = '';

  if (isLink) {
    currentHref = text && text.startsWith('http') ? text : `https://${text}`;
  }

  return (
    <S.Wrapper>
      <S.InfoItem style={text ? { opacity: '' } : { opacity: '0.75' }}>
        {icon}
        <div>
          {isLink && text ? (
            <S.Link href={currentHref} target="_blank" rel="noreferrer">
              {currentText}
            </S.Link>
          ) : (
            currentText
          )}
        </div>
      </S.InfoItem>
    </S.Wrapper>
  );
};
