//ContentMap 구성하기 (createModal 함수 인자)
import CreateModalProvider from './CreateModalProvider';
import DeleteModalContent from './DeleteModalContent';
import CreateMemberModalContent from './CreateMemberModalContent';

export const CONFIRM_DELETE_MODAL = 'confirm_delete';
export const CREATE_MEMBER_MODAL = 'create_member_modal';
const CONTENT_MAP = {
  [CONFIRM_DELETE_MODAL]: DeleteModalContent,
  //  {confirm_delete : DeleModalContent.jsx}
  [CREATE_MEMBER_MODAL]: CreateMemberModalContent,
  // {create_memver_modal : CreateMemberModalContent.jsx}
};
export default CreateModalProvider(CONTENT_MAP);
