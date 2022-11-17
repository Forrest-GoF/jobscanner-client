import { useNavigate } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';
import * as S from './styled';
import { memberState } from '@/stores/member';
import { deleteMember } from '@/apis/member';
import { RESPONSE_NO_CONTENT } from '@/constants/api';
import { KEYS, removeLocalStorageItem } from '@/utils/storage';

const AccountEdit = () => {
	const navigator = useNavigate();
	const resetMember = useResetRecoilState(memberState);

	const onMemberDeleteButtonClick = async () => {
		const { data, status } = await deleteMember();

		if (status === RESPONSE_NO_CONTENT) {
			try {
				removeLocalStorageItem(KEYS.JOB_SCANNER_ACCESS_TOKEN);
				resetMember();
				navigator('/');
			} catch (error) {
				console.error(error);
			}
		}
	};

	return (
		<S.Container>
			<S.Title>계정 삭제</S.Title>

			<S.Wrapper>
				<S.AccountDeleteWrapper>
					<S.Description>계정 삭제 시 프로필 및 모든 정보가 삭제됩니다.</S.Description>
					<S.AccountDeleteButton type="button" onClick={onMemberDeleteButtonClick}>
						계정 삭제
					</S.AccountDeleteButton>
				</S.AccountDeleteWrapper>
			</S.Wrapper>
		</S.Container>
	);
};

export default AccountEdit;
