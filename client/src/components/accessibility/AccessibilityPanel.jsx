import useAuthStore from "@/store/useAuthStore";

export default function AccessibilityPanel() {
  const { accessibility, updateAccessibility } = useAuthStore();

  return (
    <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">
      <h2 className="mb-6 text-2xl font-bold">Accessibility Settings</h2>

      <div className="space-y-5">
        <select
          value={accessibility.fontScale}
          onChange={(e) =>
            updateAccessibility({
              fontScale: e.target.value,
            })
          }
          className="w-full rounded-xl bg-white/10 p-4"
        >
          <option value="normal">Normal Text</option>
          <option value="large">Large Text</option>
          <option value="xl">Extra Large</option>
        </select>

        <select
          value={accessibility.contrast}
          onChange={(e) =>
            updateAccessibility({
              contrast: e.target.value,
            })
          }
          className="w-full rounded-xl bg-white/10 p-4"
        >
          <option value="normal">Normal Contrast</option>
          <option value="high">High Contrast</option>
        </select>

        <label className="flex justify-between">
          Voice Navigation
          <input
            type="checkbox"
            checked={accessibility.voiceNavigation}
            onChange={(e) =>
              updateAccessibility({
                voiceNavigation: e.target.checked,
              })
            }
          />
        </label>

        <label className="flex justify-between">
          Dyslexia Friendly Font
          <input
            type="checkbox"
            checked={accessibility.dyslexiaFont}
            onChange={(e) =>
              updateAccessibility({
                dyslexiaFont: e.target.checked,
              })
            }
          />
        </label>

        <label className="flex justify-between">
          Reduce Motion
          <input
            type="checkbox"
            checked={accessibility.reduceMotion}
            onChange={(e) =>
              updateAccessibility({
                reduceMotion: e.target.checked,
              })
            }
          />
        </label>
      </div>
    </div>
  );
}
