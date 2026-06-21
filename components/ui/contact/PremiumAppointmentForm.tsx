"use client";

import emailjs from "@emailjs/browser";
import { FormControl, MenuItem, Select } from "@mui/material";
import {
  CaretDown,
  CheckCircle,
  EnvelopeSimple,
  PaperPlaneTilt,
  Phone,
  User,
  WarningCircle,
  X,
} from "@phosphor-icons/react";
import { FormikHelpers } from "formik";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { ErrorMessage, Field, Form, Formik } from "formik";

import * as Yup from "yup";

const appointmentSchema = Yup.object({
  fullName: Yup.string().min(3, "Full name is required").required("Full name is required"),

  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Enter valid phone number")
    .required("Phone number is required"),

  email: Yup.string().email("Invalid email address").required("Email is required"),

  department: Yup.string().required("Please select treatment type"),
});
interface AppointmentFormValues {
  fullName: string;

  phone: string;

  email: string;

  message: string;

  department: string;
}

export default function PremiumAppointmentForm() {
  const [loading, setLoading] = useState(false);

  const [popup, setPopup] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubmit = async (
    values: AppointmentFormValues,
    { resetForm }: FormikHelpers<AppointmentFormValues>,
  ) => {
    try {
      setLoading(true);

      const templateParams = {
        fullName: values.fullName,
        phone: values.phone,
        email: values.email,
        department: values.department,
        message: values.message,
        submissionDate: new Date().toLocaleString("en-IN"),
      };

      // Send inquiry to hospital
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICEID!,
        process.env.NEXT_PUBLIC_CONTACT_PAGE_TEMPLATE!,
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_KEY!,
      );

      // Send auto reply to patient
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICEID!,
        process.env.NEXT_PUBLIC_REPLY_PAGE_TEMPLATE!,
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_KEY!,
      );

      setPopup({
        type: "success",
        message: "Appointment Request Sent Successfully",
      });

      resetForm();
    } catch (error) {
      console.log(error);

      setPopup({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);

      setTimeout(() => {
        setPopup(null);
      }, 3500);
    }
  };

  return (
    <section
      id="appointment"
      className="relative overflow-hidden bg-[#f8fafc] py-8 sm:py-10 mb-10 md:mb-5"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f8fafc] to-[#eef4ff]" />

        <div className="absolute left-[-10%] top-[-20%] h-72 w-72 rounded-full bg-secondaryOrtho/10 blur-3xl" />

        <div className="absolute bottom-[-20%] right-[-10%] h-80 w-80 rounded-full bg-primaryOrtho/10 blur-3xl" />
      </div>
      <AnimatePresence>
        {popup && (
          <motion.div
            initial={{
              opacity: 0,
              y: -30,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -30,
              scale: 0.9,
            }}
            transition={{
              duration: 0.25,
            }}
            className="fixed left-1/2 top-5 z-[9999] w-[calc(100%-24px)] max-w-md -translate-x-1/2 px-3"
          >
            <div
              className={`relative overflow-hidden rounded-[24px] border px-5 py-4 shadow-[0_25px_70px_rgba(15,23,42,0.18)] backdrop-blur-2xl ${
                popup.type === "success"
                  ? "border-green-500/20 bg-green-500 text-white"
                  : "border-red-500/20 bg-red-500 text-white"
              }`}
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />

              <div className="relative flex items-start gap-3">
                {/* Icon */}
                <div className="mt-0.5">
                  {popup.type === "success" ? (
                    <CheckCircle size={24} weight="fill" className="text-white" />
                  ) : (
                    <WarningCircle size={24} weight="fill" className="text-white" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h4 className="text-sm font-black tracking-[-0.03em]">
                    {popup.type === "success" ? "Success" : "Error"}
                  </h4>

                  <p className="mt-1 text-sm text-white/85">{popup.message}</p>
                </div>

                {/* Close */}
                <button
                  onClick={() => setPopup(null)}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:bg-white/20"
                >
                  <X size={15} weight="bold" className="text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="container-wrapper relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="relative mx-auto max-w-4xl overflow-hidden rounded-[36px] border border-primaryOrtho/10 bg-white p-5 shadow-[0_30px_90px_rgba(15,23,42,0.06)] sm:p-7"
        >
          {/* Glow */}
          <div className="absolute left-[-10%] top-[-20%] h-72 w-72 rounded-full bg-secondaryOrtho/10 blur-3xl" />

          {/* Header */}
          <div className="relative text-center">
            <h2 className="mt-5 text-[2.2rem] font-black leading-[0.95] tracking-[-0.06em] text-primaryOrtho sm:text-[3rem]">
              Book Your
              <span className="text-secondaryOrtho"> Appointment</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-primaryOrtho/60 sm:text-[15px]">
              Fill out the form below and our Orthopaedic team will contact you shortly.
            </p>
          </div>

          {/* Form */}
          <Formik
            initialValues={{
              fullName: "",
              phone: "",
              email: "",
              department: "",
              message: "",
            }}
            validationSchema={appointmentSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="relative mt-8">
                {/* Inputs */}
                <div className="grid gap-4 md:grid-cols-2">
                  {/* Full Name */}
                  <div>
                    <div className="relative">
                      <User
                        size={18}
                        weight="fill"
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-primaryOrtho/35"
                      />

                      <Field
                        name="fullName"
                        placeholder="Full Name"
                        className="h-16 w-full rounded-[22px] border border-primaryOrtho/10 bg-[#f8fafc] pl-14 pr-5 text-sm font-semibold text-primaryOrtho outline-none transition-all duration-300 placeholder:text-primaryOrtho/35 focus:border-secondaryOrtho focus:bg-white"
                      />
                    </div>

                    <ErrorMessage
                      name="fullName"
                      component="p"
                      className="mt-2 pl-1 text-xs font-semibold text-red-500"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <div className="relative">
                      <Phone
                        size={18}
                        weight="fill"
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-primaryOrtho/35"
                      />

                      <Field
                        name="phone"
                        placeholder="Phone Number"
                        className="h-16 w-full rounded-[22px] border border-primaryOrtho/10 bg-[#f8fafc] pl-14 pr-5 text-sm font-semibold text-primaryOrtho outline-none transition-all duration-300 placeholder:text-primaryOrtho/35 focus:border-secondaryOrtho focus:bg-white"
                      />
                    </div>

                    <ErrorMessage
                      name="phone"
                      component="p"
                      className="mt-2 pl-1 text-xs font-semibold text-red-500"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <div className="relative">
                      <EnvelopeSimple
                        size={18}
                        weight="fill"
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-primaryOrtho/35"
                      />

                      <Field
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        className="h-16 w-full rounded-[22px] border border-primaryOrtho/10 bg-[#f8fafc] pl-14 pr-5 text-sm font-semibold text-primaryOrtho outline-none transition-all duration-300 placeholder:text-primaryOrtho/35 focus:border-secondaryOrtho focus:bg-white"
                      />
                    </div>

                    <ErrorMessage
                      name="email"
                      component="p"
                      className="mt-2 pl-1 text-xs font-semibold text-red-500"
                    />
                  </div>

                  {/* Treatment Dropdown */}
                  <div>
                    <FormControl fullWidth>
                      <Field name="department">
                        {({ field, form }: any) => (
                          <Select
                            {...field}
                            displayEmpty
                            onChange={(e) => form.setFieldValue("department", e.target.value)}
                            IconComponent={CaretDown}
                            renderValue={(selected) => {
                              if (!selected) {
                                return (
                                  <span
                                    style={{
                                      color: "rgba(17,34,78,0.35)",
                                      fontWeight: 600,
                                      fontSize: "14px",
                                    }}
                                  >
                                    Select Treatment Type
                                  </span>
                                );
                              }

                              return selected as string;
                            }}
                            sx={{
                              height: 64,
                              borderRadius: "22px",
                              backgroundColor: "#f8fafc",

                              "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "rgba(15,23,42,0.08)",
                              },

                              "&:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "rgba(248,123,27,0.5)",
                              },

                              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#F87B1B",
                                borderWidth: "2px",
                              },

                              "& .MuiSelect-select": {
                                padding: "18px 20px",
                                fontSize: "14px",
                                fontWeight: 600,
                                color: "var(--primaryOrtho)",
                                display: "flex",
                                alignItems: "center",
                              },

                              "& .MuiSvgIcon-root": {
                                color: "rgba(17,34,78,0.4)",
                              },
                            }}
                            MenuProps={{
                              PaperProps: {
                                sx: {
                                  mt: 1,
                                  borderRadius: "20px",
                                  border: "1px solid rgba(15,23,42,0.06)",
                                  boxShadow: "0 20px 60px rgba(15,23,42,0.12)",
                                  overflow: "hidden",

                                  "& .MuiMenuItem-root": {
                                    minHeight: 50,
                                    px: 2,
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    color: "var(--primaryOrtho)",
                                    transition: "all .25s ease",
                                  },

                                  "& .MuiMenuItem-root:hover": {
                                    backgroundColor: "rgba(248,123,27,0.08)",
                                  },

                                  "& .Mui-selected": {
                                    backgroundColor: "rgba(248,123,27,0.12) !important",
                                    color: "#F87B1B",
                                  },
                                },
                              },
                            }}
                          >
                            <MenuItem value="Joint Replacement">Joint Replacement</MenuItem>

                            <MenuItem value="Sports Injury">Sports Injury</MenuItem>

                            <MenuItem value="Fracture Care">Fracture Care</MenuItem>

                            <MenuItem value="Physiotherapy">Physiotherapy</MenuItem>

                            <MenuItem value="Spine Treatment">Spine Treatment</MenuItem>
                          </Select>
                        )}
                      </Field>
                    </FormControl>

                    <ErrorMessage
                      name="department"
                      component="p"
                      className="mt-2 pl-1 text-xs font-semibold text-red-500"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="mt-4">
                  <Field
                    as="textarea"
                    rows={5}
                    name="message"
                    placeholder="Describe your health concern or treatment requirement..."
                    className="w-full rounded-[28px] border border-primaryOrtho/10 bg-[#f8fafc] p-5 text-sm font-semibold leading-relaxed text-primaryOrtho outline-none transition-all duration-300 placeholder:text-primaryOrtho/35 focus:border-secondaryOrtho focus:bg-white"
                  />

                  <ErrorMessage
                    name="message"
                    component="p"
                    className="mt-2 pl-1 text-xs font-semibold text-red-500"
                  />
                </div>

                {/* Button */}
                <motion.button
                  whileHover={{
                    scale: 1.01,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  type="submit"
                  disabled={loading}
                  className="group mt-6 cursor-pointer flex h-16 w-full items-center justify-center gap-3 rounded-[22px] bg-secondaryOrtho text-sm font-bold text-white shadow-[0_20px_45px_rgba(248,123,27,0.28)] transition-all duration-300 hover:-translate-y-1 disabled:opacity-70"
                >
                  {loading ? "Submitting..." : "Confirm Appointment"}

                  <PaperPlaneTilt
                    size={18}
                    weight="fill"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </motion.button>
              </Form>
            )}
          </Formik>
        </motion.div>
      </div>
    </section>
  );
}
