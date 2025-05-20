import { MODAL_COMPONENTS } from "@/components/organisms/Modals";
import { useModal } from "@/stores/contexts/ModalContext";

export const ModalRenderer = () => {
  const { modal } = useModal();

  if (!modal) return null;

  const Component = MODAL_COMPONENTS[modal.key];
  const props = modal.props;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 shadow-md max-w-lg w-full">
        <Component {...props} />
      </div>
    </div>
  );
};
