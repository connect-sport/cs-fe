import { RHFAutoComplete } from "@/components/atoms/RHFAutoComplete";
import { RHFTextField } from "@/components/atoms/RHFInput";
import { Address } from "@/components/molecules/Address";
import { LEVELS_ARRAY } from "@/constants/article";
import { Button } from "@mui/material";
import React from "react";

export interface Props {
  isLoading?: boolean;
  onClose?: () => void;
}

export const ArticleFilteringForm: React.FC<Props> = ({
  isLoading,
  onClose,
}) => {
  return (
    <>
      <div className="mb-2">
        <RHFTextField name="keyword" label="Từ khóa tìm kiếm" />
      </div>

      <div className="mb-2">
        <RHFAutoComplete
          name="levels"
          label="Chọn trình độ"
          options={LEVELS_ARRAY}
          multiple
        />
      </div>

      <div className="mb-2">
        <Address />
      </div>

      <footer className="flex flex-row gap-2 justify-center">
        <Button variant="outlined" onClick={onClose}>
          Hủy
        </Button>
        <Button loading={isLoading} variant="contained" type="submit">
          Tìm kiếm
        </Button>
      </footer>
    </>
  );
};
