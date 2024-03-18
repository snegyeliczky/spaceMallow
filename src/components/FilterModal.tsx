import { Button, Modal, TextInput } from "@mrshmllw/smores-react";
import { FC } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const FilterValidation = z.object({
  launchName: z
    .string({
      required_error: "Launch name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(3),
});

export type FilterValidationType = z.infer<typeof FilterValidation>;

type FilterModalProps = {
  setFilter: ({ launchName }: FilterValidationType) => void;
  isLaunchLoading: boolean;
  setModal: (status: boolean) => void;
  showModal: boolean;
};

const FilterModal: FC<FilterModalProps> = ({
  setFilter,
  isLaunchLoading,
  setModal,
  showModal,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FilterValidationType>({
    resolver: zodResolver(FilterValidation),
  });
  const onSubmit: SubmitHandler<FilterValidationType> = (data) => {
    setFilter(data);
  };

  return (
    <>
      <Button
        onClick={() => setModal(!showModal)}
        fallbackStyle
        style={{ border: 0 }}
      >
        <SearchOutlined />
      </Button>
      <Modal
        showModal={showModal}
        handleClick={() => setModal(false)}
        title="Search for launch"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: "grid", gap: 8 }}>
            <div>
              <TextInput
                placeholder="launch Name"
                {...register("launchName")}
                type="text"
              />
              {errors.launchName && (
                <span style={{ color: "red" }}>
                  {errors.launchName.message}
                </span>
              )}
            </div>
            <Button type="submit" loading={isLaunchLoading}>
              Submit
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default FilterModal;
