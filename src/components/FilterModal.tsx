import { Button, Modal, TextInput } from "@mrshmllw/smores-react";
import { useState } from "react";
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

type FilterValidationType = z.infer<typeof FilterValidation>;

const FilterModal = () => {
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FilterValidationType>({
    resolver: zodResolver(FilterValidation),
  });
  const onSubmit: SubmitHandler<FilterValidationType> = (data) =>
    console.log(data);

  return (
    <>
      <Button
        onClick={() => setShowModal(!showModal)}
        fallbackStyle
        style={{ border: 0 }}
      >
        <SearchOutlined />
      </Button>
      <Modal
        showModal={showModal}
        handleClick={() => setShowModal(false)}
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
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default FilterModal;
