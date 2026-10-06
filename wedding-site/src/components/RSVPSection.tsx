"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export const RSVPSection = () => {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    // REPLACE THIS URL with your actual Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbwC8PoTCxMR99JOa3F4UPqvu8kVo9Q-7hB0qAdkhpATcX4SjrOu56_PY_cGDsprKi54Tw/exec";

    const formData = new FormData(e.currentTarget);

    // Convert FormData to URLSearchParams properly to satisfy TypeScript
    const data = new URLSearchParams();
    formData.forEach((value, key) => {
      data.append(key, value.toString());
    });

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Required to bypass Google Apps Script CORS redirect rules
        body: data,
      });
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="rsvp-section">
      <motion.div
        className="rsvp-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        {status === "success" ? (
          <div className="rsvp-success">
            <h3>Thank You!</h3>
            <p>Your RSVP has been successfully received.</p>
          </div>
        ) : (
          <>
            <h2 className="rsvp-title">Kindly RSVP</h2>
            <p className="rsvp-subtitle">
              We would love to know if you can make it!
            </p>

            <form className="rsvp-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name(s)</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="attending">Will you attend?</label>
                <select id="attending" name="attending" required>
                  <option value="">Please select...</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="guests">Number of Guests</label>
                <select id="guests" name="guests" required>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4+</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="dietary">Non-Vegetarian/Vegetarian</label>
                <select id="dietary" name="dietary" required>
                  <option value="">Please select...</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Non-Vegetarian">Non-Vegetarian</option>
                </select>
              </div>

              <button
                type="submit"
                className="rsvp-submit-btn"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending..." : "Send RSVP"}
              </button>

              {status === "error" && (
                <p className="rsvp-error">
                  Something went wrong. Please try again later.
                </p>
              )}
            </form>
          </>
        )}
      </motion.div>
    </section>
  );
};
