import { DATE_TIME_FORMAT } from "@/constants/date";
import { MODAL_KEYS } from "@/constants/modalContentMap";
import { ModalPropsMap } from "@/types/modalProps";
import { Button } from "@mui/material";
import { Spin } from "antd";
import dayjs from "dayjs";

const DetailsArticleModal = ({
  article,
  onClose,
}: ModalPropsMap[typeof MODAL_KEYS.DETAILS_ARTICLE]) => {
  if (!article)
    return (
      <main className="flex justify-center items-center">
        <Spin size="large" />
      </main>
    );

  return (
    <main>
      <section className="flex items-center mb-4">
        <strong className="pr-2">Tiêu đề:</strong>
        <span>{article?.title}</span>
      </section>
      <section className="flex items-center mb-4">
        <strong className="pr-2">Địa điểm: </strong>
        <span>{article?.category.name}</span>
      </section>
      <section className="flex items-center mb-4">
        <strong className="pr-2">Thời gian:</strong>
        <span>
          {dayjs(article.fromDateTime).format(DATE_TIME_FORMAT)} đến{" "}
          {dayjs(article.toDateTime).format(DATE_TIME_FORMAT)}
        </span>
      </section>
      <section className="flex items-center mb-4">
        <strong className="pr-2">Mô tả: </strong>
        <span>{article?.description}</span>
      </section>
      <Button onClick={onClose} variant="contained">
        OK
      </Button>
    </main>
  );
};

export { DetailsArticleModal };
