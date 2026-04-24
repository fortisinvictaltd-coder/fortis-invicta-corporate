"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  partnerTypes,
  interestAreas,
  countries,
  type EOISubmission,
} from "@/lib/eoi-types";

const CEO_EMAIL = "cadjatu@fortisinvicta.com";

export default function EOIPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState<EOISubmission>({
    partnerType: "",
    interestAreas: [],
    organizationName: "",
    registrationNumber: "",
    country: "",
    website: "",
    fullName: "",
    position: "",
    email: "",
    phone: "",
    message: "",
    subscribeNewsletter: true,
  });

  const updateField = <K extends keyof EOISubmission>(
    field: K,
    value: EOISubmission[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleInterest = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      interestAreas: prev.interestAreas.includes(id)
        ? prev.interestAreas.filter((i) => i !== id)
        : [...prev.interestAreas, id],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/partners/eoi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit");

      setSuccess(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const canProceed = () => {
    if (step === 1) return formData.partnerType !== "";
    if (step === 2) return formData.interestAreas.length > 0;
    if (step === 3) return formData.organizationName !== "" && formData.country !== "";
    if (step === 4) return formData.fullName !== "" && formData.email !== "";
    return true;
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-fortis-green text-white py-4">
          <div className="container-s flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-fortis-gold text-2xl">♦</span>
              FORTIS INVICTA
            </Link>
            <Link href="/" className="hover:text-fortis-gold">
              ← Back to Home
            </Link>
          </div>
        </nav>
        <div className="container-s py-20 text-center">
          <div className="text-6xl mb-6">✅</div>
          <h1 className="text-3xl font-bold mb-4 text-fortis-green">
            Expression of Interest Submitted!
          </h1>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Thank you for your interest in partnering with FORTIS INVICTA LTD.
            Our team will review your submission and contact you within 48 hours.
          </p>
          <p className="text-sm text-gray-500 mb-8">
            A confirmation email has been sent to {formData.email}
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/" className="btn-primary">
              Return to Home
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-fortis-green text-white py-4">
        <div className="container-s flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-fortis-gold text-2xl">♦</span>
            FORTIS INVICTA
          </Link>
          <Link href="/" className="hover:text-fortis-gold">
            ← Back to Home
          </Link>
        </div>
      </nav>

      <div className="container-s py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">
            Partner With Us
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Submit your Expression of Interest to explore partnership opportunities
          </p>

          {/* Progress Steps */}
          <div className="flex justify-center mb-8">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                    step >= s
                      ? "bg-fortis-gold text-fortis-green"
                      : "bg-gray-300 text-white"
                  }`}
                >
                  {s}
                </div>
                {s < 4 && (
                  <div
                    className={`w-16 h-1 ${
                      step > s ? "bg-fortis-gold" : "bg-gray-300"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
            {/* Step 1: Partner Type */}
            {step === 1 && (
              <div>
                <h2 className="text-xl font-bold mb-6">
                  Step 1: Select Your Organization Type
                </h2>
                <div className="space-y-3">
                  {partnerTypes.map((type) => (
                    <label
                      key={type.id}
                      className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                        formData.partnerType === type.id
                          ? "border-fortis-gold bg-fortis-gold/10"
                          : "border-gray-200 hover:border-fortis-green"
                      }`}
                    >
                      <input
                        type="radio"
                        name="partnerType"
                        value={type.id}
                        checked={formData.partnerType === type.id}
                        onChange={() => updateField("partnerType", type.id)}
                        className="sr-only"
                      />
                      <span className="text-fortis-green font-bold">
                        {type.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Interest Areas */}
            {step === 2 && (
              <div>
                <h2 className="text-xl font-bold mb-6">
                  Step 2: Select Your Areas of Interest
                </h2>
                <p className="text-gray-500 text-sm mb-4">
                  Select all that apply
                </p>
                <div className="space-y-3">
                  {interestAreas.map((area) => (
                    <label
                      key={area.id}
                      className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                        formData.interestAreas.includes(area.id)
                          ? "border-fortis-gold bg-fortis-gold/10"
                          : "border-gray-200 hover:border-fortis-green"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.interestAreas.includes(area.id)}
                        onChange={() => toggleInterest(area.id)}
                        className="sr-only"
                      />
                      <span className="text-fortis-green font-bold">
                        {area.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Organization Details */}
            {step === 3 && (
              <div>
                <h2 className="text-xl font-bold mb-6">
                  Step 3: Organization Details
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Organization Name *
                    </label>
                    <input
                      type="text"
                      value={formData.organizationName}
                      onChange={(e) =>
                        updateField("organizationName", e.target.value)
                      }
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-fortis-green"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Registration Number
                    </label>
                    <input
                      type="text"
                      value={formData.registrationNumber}
                      onChange={(e) =>
                        updateField("registrationNumber", e.target.value)
                      }
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-fortis-green"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Country / Region *
                    </label>
                    <select
                      value={formData.country}
                      onChange={(e) => updateField("country", e.target.value)}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-fortis-green"
                    >
                      <option value="">Select a country</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Website
                    </label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) => updateField("website", e.target.value)}
                      placeholder="https://"
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-fortis-green"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Contact & Submission */}
            {step === 4 && (
              <div>
                <h2 className="text-xl font-bold mb-6">
                  Step 4: Contact Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => updateField("fullName", e.target.value)}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-fortis-green"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Position / Title *
                    </label>
                    <input
                      type="text"
                      value={formData.position}
                      onChange={(e) => updateField("position", e.target.value)}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-fortis-green"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-fortis-green"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-fortis-green"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Brief Message / Project Scope *
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      required
                      minLength={50}
                      rows={4}
                      placeholder="Describe your partnership goals and project scope..."
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-fortis-green"
                    />
                  </div>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formData.subscribeNewsletter}
                      onChange={(e) =>
                        updateField("subscribeNewsletter", e.target.checked)
                      }
                    />
                    <span className="text-sm text-gray-600">
                      Subscribe to Monthly Impact Newsletter
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:border-fortis-green transition-colors"
                >
                  ← Back
                </button>
              ) : (
                <div />
              )}

              {step < 4 ? (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  disabled={!canProceed()}
                  className="px-6 py-3 bg-fortis-green text-white rounded-lg font-semibold disabled:opacity-50 transition-colors"
                >
                  Next →
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 bg-fortis-gold text-fortis-green rounded-lg font-semibold disabled:opacity-50 transition-colors"
                >
                  {loading ? "Submitting..." : "Submit EOI"}
                </button>
              )}
            </div>

            {error && (
              <p className="text-red-600 text-center mt-4">{error}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}