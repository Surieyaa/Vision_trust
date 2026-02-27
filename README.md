# 🛡️ Vision_trust
**Distinguishing Reality from Synthesis in the Age of Generative AI**

Vision_trust is a computer vision project designed to analyze and classify images as either **Real** (human-captured) or **AI-Generated**. By leveraging advanced deep learning architectures, this project aims to provide a layer of trust and verification for digital media.

## 🚀 Overview
As AI image generators (like Midjourney, DALL-E, and Stable Diffusion) become more sophisticated, the line between reality and synthesis is blurring. Vision_trust addresses this by:
1. **Detecting Artifacts:** Identifying pixel-level inconsistencies that are invisible to the human eye.
2. **Metadata Analysis:** Probing for hidden signatures or watermarks embedded by AI models.
3. **Forensic Analysis:** Evaluating frequency domains to find structural patterns typical of GANs and Diffusion models.

## 🧠 The Detection Battle: Human vs. AI
Who detects images better? Here is a breakdown of the current landscape in 2026:

| Feature | Human Detection | AI Detection (Vision_trust) |
| :--- | :--- | :--- |
| **Accuracy** | ~50-60% (Slightly better than a coin flip) | **90% - 98%** (on known models) |
| **Strengths** | Identifying "uncanny" expressions or logic errors. | Detecting mathematical patterns & noise distributions. |
| **Weaknesses** | Easily fooled by high-quality textures & lighting. | Can be tricked by heavy compression or "noise" attacks. |
| **Hidden Data** | **None** (Blind to metadata/invisible pixels). | **High** (Can read SynthID or C2PA watermarks). |

## 🛠️ Key Features
* **Dual-Stream Detection:** Analyzes both the visual surface and the underlying bitstream.
* **Hidden Data Extraction:** Capable of identifying "invisible" watermarks (like Google's SynthID) that persist even after cropping or resizing.
* **Real-time Inference:** Fast processing for bulk image verification.

## 📂 Project Structure
* `/models`: Pre-trained weights for detection.
* `/src`: Core logic for image preprocessing and forensic analysis.
* `/data`: Sample datasets of Real vs. AI-generated images.

---
*Developed with a focus on digital integrity and media literacy.*
