import { MODAL_KEYS } from "@/constants/modalContentMap";
import { ModalPropsMap } from "@/types/modalProps";
import { Button } from "@mui/material";

const DetailsArticleModal = ({
  article,
  onClose,
}: ModalPropsMap[typeof MODAL_KEYS.DETAILS_ARTICLE]) => {
  console.log("article", article);
  return (
    <main>
      <section className="flex items-center mb-4">
        <span>Tiêu đề:</span>
        <strong>{article?.title}</strong>
      </section>
      <section className="flex items-center mb-4">
        <span>Tiêu đề:</span>
        <strong>{article?.title}</strong>
      </section>
      <section className="flex items-center mb-4">
        <span>Tiêu đề:</span>
        <strong>{article?.title}</strong>
      </section>
      <Button onClick={onClose} variant="contained">
        OK
      </Button>
    </main>
  );
};

export { DetailsArticleModal };
