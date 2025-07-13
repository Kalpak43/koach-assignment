"use client";

import { motion } from "motion/react";
import Container from "@/components/ui/container";
import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  organization: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  organization?: string;
  message?: string;
}

interface FormTouched {
  name: boolean;
  email: boolean;
  organization: boolean;
  message: boolean;
}

function ContactForm() {
  return (
    <Container className="space-y-8">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0 lg:border rounded-lg relative z-10 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="lg:hidden lg:p-8 space-y-6 max-md:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl lg:text-4xl font-[500] font-serif">
              Our Office
            </h2>
          </motion.div>

          <div className="lg:h-full lg:w-full max-md:aspect-video max-md:rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.191961731196!2d72.83730575081945!3d19.05529583093355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c93cfdbad187%3A0x3ca7c56b992a8dbc!2sS.V.%20Road%2C%20Bandra%20West%2C%20Mumbai%2C%20Maharashtra%20400050!5e0!3m2!1sen!2sin!4v1752330850798!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            />
          </div>
        </motion.div>

        {/* Form Block */}
        <motion.div
          className="lg:p-8 space-y-6 max-md:order-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl lg:text-4xl font-[500] font-serif">
            Get in Touch
          </h2>
          <Form />
        </motion.div>
      </motion.div>
    </Container>
  );
}

export default ContactForm;

function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<FormTouched>({
    name: false,
    email: false,
    organization: false,
    message: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  // Validation functions
  const validateField = (
    name: keyof FormData,
    value: string
  ): string | undefined => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2)
          return "Name must be at least 2 characters";
        return undefined;

      case "email":
        if (!value.trim()) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value))
          return "Please enter a valid email address";
        return undefined;

      case "organization":
        if (!value.trim()) return "Organization name is required";
        if (value.trim().length < 2)
          return "Organization name must be at least 2 characters";
        return undefined;

      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 10)
          return "Message must be at least 10 characters";
        if (value.trim().length > 1000)
          return "Message must be less than 1000 characters";
        return undefined;

      default:
        return undefined;
    }
  };

  // Validate all fields
  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    Object.keys(formData).forEach((key) => {
      const fieldName = key as keyof FormData;
      const error = validateField(fieldName, formData[fieldName]);
      if (error) {
        newErrors[fieldName] = error;
      }
    });
    return newErrors;
  };

  // Handle input changes
  const handleInputChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate field if it has been touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  // Handle field blur (when user leaves the field)
  const handleBlur = (name: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, formData[name]);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      organization: true,
      message: true,
    });

    // Validate all fields
    const formErrors = validateForm();
    setErrors(formErrors);

    // Check if form is valid
    if (Object.keys(formErrors).length > 0) {
      setSubmitStatus("error");
      setSubmitMessage("Please fix the errors above before submitting.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simulate random success/failure for demo
      if (Math.random() > 0.2) {
        setSubmitStatus("success");
        setSubmitMessage(
          "Thank you for your message! We'll get back to you soon."
        );
        // Reset form
        setFormData({
          name: "",
          email: "",
          organization: "",
          message: "",
        });
        setTouched({
          name: false,
          email: false,
          organization: false,
          message: false,
        });
        setErrors({});
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Check if form is valid
  const isFormValid =
    Object.keys(validateForm()).length === 0 &&
    Object.values(formData).every((value) => value.trim() !== "");

  return (
    <>
      {submitStatus !== "idle" && (
        <Alert
          className={
            submitStatus === "success"
              ? "border-green-200 bg-green-50"
              : "border-red-200 bg-red-50"
          }
        >
          {submitStatus === "success" ? (
            <CheckCircle className="h-4 w-4 text-green-600" />
          ) : (
            <AlertCircle className="h-4 w-4 text-red-600" />
          )}
          <AlertDescription
            className={
              submitStatus === "success" ? "text-green-800" : "text-red-800"
            }
          >
            {submitMessage}
          </AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              onBlur={() => handleBlur("name")}
              placeholder="Enter your full name"
              className={
                errors.name && touched.name
                  ? "border-red-500 focus-visible:ring-red-500"
                  : ""
              }
            />
            {errors.name && touched.name && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              onBlur={() => handleBlur("email")}
              placeholder="Enter your email address"
              className={
                errors.email && touched.email
                  ? "border-red-500 focus-visible:ring-red-500"
                  : ""
              }
            />
            {errors.email && touched.email && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Organization Field */}
        <div className="space-y-2">
          <Label htmlFor="organization" className="text-sm font-medium">
            Organization / Startup Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="organization"
            type="text"
            value={formData.organization}
            onChange={(e) => handleInputChange("organization", e.target.value)}
            onBlur={() => handleBlur("organization")}
            placeholder="Enter your organization or startup name"
            className={
              errors.organization && touched.organization
                ? "border-red-500 focus-visible:ring-red-500"
                : ""
            }
          />
          {errors.organization && touched.organization && (
            <p className="text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              {errors.organization}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm font-medium">
            Message <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            onBlur={() => handleBlur("message")}
            placeholder="Tell us about your project, questions, or how we can help..."
            className={`min-h-[120px] resize-none ${
              errors.message && touched.message
                ? "border-red-500 focus-visible:ring-red-500"
                : ""
            }`}
          />
          <div className="flex justify-between items-center">
            {errors.message && touched.message && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.message}
              </p>
            )}
            <p
              className={`text-xs ml-auto ${
                formData.message.length > 1000
                  ? "text-red-600"
                  : "text-muted-foreground"
              }`}
            >
              {formData.message.length}/1000
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={!isFormValid || isSubmitting}
          className="w-full text-base font-medium disabled:bg-gray-300  text-black"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending Message...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </>
  );
}
