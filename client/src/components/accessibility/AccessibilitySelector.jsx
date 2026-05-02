import useAuthStore from "@/store/useAuthStore";

const options = [
  "Blind",
  "Low Vision",
  "Deaf",
  "Hearing Impaired",
  "Mobility",
  "Speech",
  "Neurodivergent",
];

export default function AccessibilitySelector() {
  const { accessibility, updateAccessibility } = useAuthStore();

  const toggleOption = (value) => {
    const exists = accessibility.disabilityType.includes(value);

    if (exists) {
      updateAccessibility({
        disabilityType: accessibility.disabilityType.filter(
          (item) => item !== value,
        ),
      });
    } else {
      updateAccessibility({
        disabilityType: [...accessibility.disabilityType, value],
      });
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Choose support needs</h3>

      <div className="grid gap-3 md:grid-cols-2">
        {options.map((option) => {
          const active = accessibility.disabilityType.includes(option);

          return (
            <button
              key={option}
              onClick={() => toggleOption(option)}
              className={`rounded-2xl border p-4 transition ${
                active
                  ? "border-cyan-400 bg-cyan-500/20"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
