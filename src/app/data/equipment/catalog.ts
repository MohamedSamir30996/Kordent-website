import type { EquipmentCategory, EquipmentProduct } from "./types";

type EquipmentProductWithContext = EquipmentProduct & {
  categoryId: string;
  subcategoryId: string;
  categoryName: string;
};

export const equipmentCategoriesSource: EquipmentCategory[] = [
  {
    id: "restorative-materials",
    name: "Restorative Materials",
    description: "High-quality materials for dental restorations",
    subcategories: [
      {
        id: "composite-resin",
        name: "K. Composite Resin",
        products: [
          {
            id: 1,
            slug: "k-composite-resin",
            name: "K. Composite Resin",
            tagline: "Light curing universal composite resin with nano hybrid filler",
            summary:
              "Water-insoluble universal composite with optimal biocompatibility, high polymerization rate, low shrinkage, and enhanced flexural rigidity. Minimized stickiness and slumping for excellent usability in anterior and posterior restorations.",
            highlights: [
              "Nano hybrid filler with shades A0 through U0",
              "Compressive strength 396 MPa; flexural strength 175 MPa",
              "Radiopaque and highly polishable for Class I–V restorations",
            ],
            details: [
              {
                title: "Features",
                items: [
                  "High strength and excellent water insolubility with optimum nano filler",
                  "Compressive strength 396 MPa, flexural strength 175 MPa, hardness 95 MPa",
                  "Excellent applicability with no stickiness and easy application",
                  "Manifested clearly on X-ray scan; highly polishable",
                  "Applicable for all anterior and posterior teeth restorations (Class I–V)",
                  "Excellent color match with natural tooth",
                ],
              },
              {
                title: "Suggested Applications",
                items: [
                  "Restoration for all anterior and posterior teeth sections (Class I–V)",
                  "Restoration of fractured anterior teeth",
                  "Replacement of amalgam for esthetic purpose",
                  "Core build-up",
                ],
              },
            ],
            packages: [{ items: ["1 × 4g syringe/pack"] }],
            description:
              "Light-cured nano hybrid composite resin for universal anterior and posterior restorations.",
          },
        ],
      },
      {
        id: "composite-resin-kit",
        name: "K. Composite Resin Kit",
        products: [
          {
            id: 2,
            slug: "k-composite-resin-kit-1",
            name: "Kit 1",
            tagline: "Complete composite resin starter kit",
            summary:
              "Professional starter kit combining K. Composite Resin syringes with etchant, bonding agent, and applicators for chairside restorative procedures.",
            highlights: [
              "Eight K. Composite Resin syringes with selectable shades",
              "Includes K. Etch-37 syringe with tips",
              "Includes K. Bond bottles and micro applicators",
            ],
            details: [
              {
                title: "Composition",
                items: [
                  "K. Composite Resin — 8 syringes",
                  "K. Etch-37 — 1 syringe, tips",
                  "K. Bond — 2 bottles, 15 micro applicators",
                  "Selectable composite resin shades (Basic shades: A0, A1, A2, A3, A3.5, B1, B2, B3, U0)",
                ],
              },
            ],
            packages: [{ title: "Kit 1", items: ["Complete composite resin starter kit"] }],
            description: "Complete composite resin starter kit with resin, etchant, and bond.",
          },
          {
            id: 3,
            slug: "k-composite-resin-kit-2",
            name: "Kit 2",
            tagline: "Advanced composite resin professional kit",
            summary:
              "Compact professional kit with composite resin, etchant, and bonding agent for efficient restorative workflows.",
            highlights: [
              "Two K. Composite Resin syringes",
              "K. Etch-37 syringe with tips included",
              "K. Bond bottle for priming and bonding",
            ],
            details: [
              {
                title: "Composition",
                items: [
                  "K. Composite Resin — 2 syringes",
                  "K. Etch-37 — 1 syringe, 2 tips",
                  "K. Bond — 1 bottle",
                ],
              },
            ],
            packages: [{ title: "Kit 2", items: ["Advanced composite resin professional kit"] }],
            description: "Advanced composite resin professional kit for clinical use.",
          },
        ],
      },
      {
        id: "flow-resin",
        name: "K. Flow Resin",
        products: [
          {
            id: 4,
            slug: "k-flow-resin",
            name: "K. Flow Resin",
            tagline: "Light cured flowable composite resin with nano hybrid filler",
            summary:
              "Flowable composite with superb flowability for detailed applications, tooth bridges, and barriers. Also suitable as base and liner for restorations.",
            highlights: [
              "Nano hybrid filler; shades A0 through U0",
              "Compressive strength 340 MPa; low polymerization shrinkage",
              "Excellent flow into dental cavities with near-natural esthetics",
            ],
            details: [
              {
                title: "Features",
                items: [
                  "Excellent water insoluble material with optimal nano hybrid filler",
                  "Compressive strength 340 MPa, flexural strength 150 MPa, hardness 65 MPa",
                  "Excellent flow into dental cavities by superb flowability",
                  "Low polymerization shrinkage; available for adhering orthodontic brackets",
                  "Aesthetic color match with near-natural tooth",
                ],
              },
              {
                title: "Suggested Applications",
                items: [
                  "Cavity liner for direct restoration; small and deep minute gaps",
                  "Sealing of pit and fissure; base and liner of restoratives",
                  "Block-out of undercut",
                ],
              },
            ],
            packages: [{ items: ["2 × 2g syringes, disposable tips / pack"] }],
            description:
              "Flowable nano hybrid composite resin for liners, pit-and-fissure sealing, and detailed restorations.",
          },
        ],
      },
      {
        id: "temp-flow",
        name: "K.Temp Flow",
        products: [
          {
            id: 5,
            slug: "k-temp-flow",
            name: "K.Temp Flow",
            tagline: "Light curing semi-gel type temporary composite resin",
            summary:
              "Temporary filling material that isolates prepared cavities from oral conditions before prosthetic installation. Semi-gel type dispensed through disposable tips for easy application.",
            highlights: [
              "Semi-gel temporary restoration with visible blue or yellow shades",
              "Excellent sealing ability with easy removal and no debris",
              "No deviation until dental prosthetic installation",
            ],
            details: [
              {
                title: "Features",
                items: [
                  "No easily deviation till dental prosthetic installation",
                  "Semi-gel type temporary restoration material",
                  "Easy to remove; no debris left after removal",
                  "Excellent sealing ability; adhesive to the side of dental cavities",
                  "Easy to check debris after removal with visible color (blue, yellow)",
                ],
              },
              {
                title: "Suggested Applications",
                items: [
                  "Temporary restoration for inlay and onlay cavity",
                  "Temporary filling and sealing; temporary filling for implant abutment",
                  "Damp-blocking temporary sealing",
                ],
              },
            ],
            packages: [{ items: ["5 × 2g syringes, disposable tips / pack"] }],
            description: "Semi-gel temporary flowable composite for provisional cavity protection.",
          },
        ],
      },
      {
        id: "k-tem",
        name: "K.Tem",
        products: [
          {
            id: 6,
            slug: "k-tem",
            name: "K.Tem",
            tagline: "Light cured resin for temporary tooth fabrication",
            summary:
              "Light-cured resin for making temporary teeth for permanent prosthesis or implant. Enables fast hand fabrication within minutes while reducing material loss.",
            highlights: [
              "Fast fabrication within 3 minutes by hand",
              "Syringe type for easy dispensing",
              "Shades A2 and A3 available",
            ],
            details: [
              {
                title: "Features",
                items: [
                  "Light cured resin for fabrication of temporary tooth",
                  "Fast fabrication (within 3 minutes) of temporary tooth by hand, reducing material loss",
                  "Easy to use; syringe type",
                ],
              },
            ],
            packages: [
              {
                items: [
                  "5 × 12ml (14g) syringes / pack",
                  "One syringe can make approximately 20 temporary teeth or 30 temporary anterior teeth",
                ],
              },
            ],
            description: "Light-cured resin for fast fabrication of temporary teeth.",
          },
        ],
      },
      {
        id: "temp-crown",
        name: "K. Temp Crown",
        products: [
          {
            id: 7,
            slug: "k-temp-crown",
            name: "K. Temp Crown",
            tagline: "Light cured paste-type resin for temporary crowns",
            summary:
              "Paste-type light-cured resin for making temporary crowns. Saves materials and time for temporary crown fabrication with excellent esthetics on thin areas.",
            highlights: [
              "Paste-type resin for efficient temporary crown fabrication",
              "Highly esthetic; reduces repair on thin areas",
              "Shades A1 and A3 available",
            ],
            details: [
              {
                title: "Features",
                items: [
                  "Enables saving of materials and time for fabrication of temporary crown",
                  "Highly esthetic temporary crown material",
                  "Does not break easily on thin parts, reducing repair cases",
                ],
              },
            ],
            packages: [{ items: ["2 × 2g syringes, tips"] }],
            description:
              "Temporary crown material for the period before permanent crown placement.",
          },
          {
            id: 8,
            slug: "k-temp-crown-kit",
            name: "K. Temp Crown Kit",
            tagline: "Complete kit for temporary crown fabrication",
            summary:
              "Temp crown kit for fabrication of temporary crowns including crown resin, transparent silicone, and vaseline for efficient clinical workflows.",
            highlights: [
              "Includes temp crown resin syringes with tips",
              "Transparent silicone cartridges for shaping",
              "Vaseline syringe for easy crown removal",
            ],
            details: [
              {
                title: "Composition",
                items: [
                  "K. Temp Crown — 10 × 2g syringes, tips",
                  "Transparent Silicone — 2 × 50ml (25ml base, 25ml catalyst) cartridges",
                  "Vaseline — 1 × 5ml syringe, tip",
                ],
              },
              {
                title: "Application",
                items: [
                  "Apply vaseline on the tooth and set crown resin after making a shape with transparent silicone",
                  "Light cure transparent silicone from the outside",
                ],
              },
            ],
            packages: [{ items: ["Complete temporary crown fabrication kit"] }],
            description: "Complete temporary crown kit with resin, silicone, and vaseline.",
          },
        ],
      },
      {
        id: "flow-implant",
        name: "K.flow for Implant",
        products: [
          {
            id: 9,
            slug: "k-flow-for-implant",
            name: "K.flow for Implant",
            tagline: "Flowable filling material for implant abutment",
            summary:
              "Flowable temporary filling material designed for implant abutments with perfect sealing to prevent screw loosening and easy removal after treatment.",
            highlights: [
              "Perfect sealing to prevent screw loosening",
              "No shrinkage or expansion; flexible for easy removal",
              "Easy to apply with no cracking or foul odor",
            ],
            details: [
              {
                title: "Features",
                items: [
                  "Perfect sealing to prevent screw loosening",
                  "Excellent homogenous composition for perfect sealing",
                  "No shrinkage, no expansion",
                  "Flexible enough to remove easily",
                  "Easy to apply; no cracking, no foul odor",
                ],
              },
              {
                title: "Suggested Applications",
                items: ["Temporary filling material for implant abutment"],
              },
            ],
            packages: [{ items: ["5 × 1.2ml syringes, disposable tips"] }],
            description: "Flowable composite for implant abutment temporary sealing.",
          },
        ],
      },
      {
        id: "k-lay",
        name: "K.Lay",
        products: [
          {
            id: 10,
            slug: "k-lay",
            name: "K.Lay",
            tagline: "Light cured semi-flowable block-out material",
            summary:
              "Semi-flowable block-out material with low viscosity for easy flow, fast working time, and blue color for easy visibility during laboratory and clinical procedures.",
            highlights: [
              "Low viscosity for easy flow into voids and undercuts",
              "Blue color for easy visibility",
              "Fast working time with easy removal",
            ],
            details: [
              {
                title: "Features",
                items: [
                  "Low viscosity for easy flow",
                  "Fast working; easy to remove",
                  "Blue color for easy visibility",
                ],
              },
              {
                title: "Suggested Applications",
                items: [
                  "Blocks out undercuts on dies and fills in voids",
                  "Provides reservoir space for bleaching individual trays",
                  "Blocks out the part to be protected before sanding",
                ],
              },
            ],
            packages: [{ items: ["5 × 1.2ml syringes, disposable tips"] }],
            description: "Semi-flowable block-out material for dies, trays, and undercuts.",
          },
        ],
      },
    ],
  },
  {
    id: "etchant-adhesives",
    name: "Etchant & Adhesives",
    description: "Bonding and etching solutions for optimal adhesion",
    subcategories: [
      {
        id: "k-etch-37",
        name: "K. Etch-37",
        products: [
          {
            id: 11,
            slug: "k-etch-37",
            name: "K. Etch-37",
            tagline: "Semi-gel type etching agent with phosphoric acid",
            summary:
              "37% phosphoric acid semi-gel etchant for dentin and enamel. Removes the smear layer and increases adhesive strength with optimal viscosity for precise placement.",
            highlights: [
              "Optimal viscosity for precise placement and control",
              "Excellent etching of dentin and enamel",
              "Perfect removal with no debris left after etching",
            ],
            details: [
              {
                title: "Features",
                items: [
                  "Optimal viscosity for precise placement and excellent control",
                  "Excellent etching of dentin and enamel",
                  "Provides excellent etching depth",
                  "Perfect removal and no debris left after etching",
                  "No leak from the syringe after use",
                ],
              },
              {
                title: "Suggested Applications",
                items: ["Etching for bonding composites, sealants, or adhesives"],
              },
            ],
            packages: [{ items: ["5 × 3ml syringes, disposable tips"] }],
            description:
              "Semi-gel 37% phosphoric acid etchant for dentin and enamel bonding preparation.",
          },
        ],
      },
      {
        id: "k-bond",
        name: "K. Bond",
        products: [
          {
            id: 12,
            slug: "k-bond",
            name: "K. Bond",
            tagline: "One-step priming and bonding — 5th generation bond",
            summary:
              "Light-cured single-component dentin and enamel bonding agent for direct composite restorations with high bond strength and long-lasting adhesion.",
            highlights: [
              "5th generation one-step bond after etching",
              "High bond strength to dentin, enamel, and cementum",
              "Available in bottle delivery for clinical efficiency",
            ],
            details: [
              {
                title: "Features",
                items: [
                  "Light cured single component dentin and enamel bonding agent",
                  "5th generation bond — use after etching, then apply resin",
                  "High bond strength; long-lasting bond",
                  "Available in bottle delivery",
                ],
              },
              {
                title: "Suggested Applications",
                items: [
                  "All direct placements for composite resin restoration",
                  "Bonding of composite to dentin, enamel, and cementum",
                ],
              },
            ],
            packages: [{ items: ["2 × 5ml (5g) bottles"] }],
            description: "5th generation light-cured bonding agent for composite restorations.",
          },
        ],
      },
      {
        id: "temp-cement",
        name: "K. Temp Cement",
        products: [
          {
            id: 13,
            slug: "k-temp-cement",
            name: "K. Temp Cement",
            tagline: "Temporary cement solvent — removable up to 0.3mm thick",
            summary:
              "Temporary cement cleaning solution for removal of eugenol or non-eugenol temporary cement from prostheses without damage or debris contamination.",
            highlights: [
              "Perfect removal of temporary cement residues",
              "Applicable for eugenol or non-eugenol temporary cement",
              "No damage to prosthesis; no contamination by debris",
            ],
            details: [
              {
                title: "Features",
                items: [
                  "Perfect removal of temporary cement",
                  "Applicable for eugenol or non-eugenol temporary cement",
                  "No damage to prosthesis",
                  "No contamination by debris",
                ],
              },
              {
                title: "Suggested Applications",
                items: [
                  "Removal of temporary cement from crowns and provisional restorations",
                  "Soak prosthesis for 10 minutes, rinse with running water for 10 seconds",
                ],
              },
              {
                title: "Warning",
                items: ["No intraoral use"],
              },
            ],
            packages: [{ items: ["1 × 500ml bottle", "1 × 200ml bottle"] }],
            description: "Temporary cement solvent for cleaning provisional restorations.",
          },
          {
            id: 14,
            slug: "k-temp-cement-ne",
            name: "K. Temp Cement NE",
            tagline: "Non-eugenol temporary cement",
            summary:
              "Non-eugenol temporary cement with good adhesive bonding strength, fast intraoral curing, and compatibility with acrylic and plastic provisional materials.",
            highlights: [
              "Good adhesive bonding strength",
              "Fast curing in oral cavity reduces operation time",
              "Compatible with acrylic resin and plastic provisional materials",
            ],
            details: [
              {
                title: "Features",
                items: [
                  "Good adhesive bonding strength",
                  "Compatible with acrylic resin and plastic provisional materials",
                  "Eco tip attachment minimizes material usage",
                  "Fast curing in oral cavity reduces operation time",
                  "No irritation of soft tissue",
                ],
              },
              {
                title: "Suggested Applications",
                items: [
                  "Temporary cementing of ceramic, metal, or composite inlay, onlay, crown, bridge, post, and screw",
                ],
              },
            ],
            packages: [
              {
                items: [
                  "2 × 5ml (13g) syringes, eco tips",
                  "Mixing time: 10–15 seconds; operation time: within 30 seconds",
                  "Setting time in mouth: 3 minutes 30 seconds",
                ],
              },
            ],
            description: "Non-eugenol temporary cement for provisional restorations.",
          },
          {
            id: 15,
            slug: "k-temp-cement-ez",
            name: "K. Temp Cement EZ",
            tagline: "Non-eugenol temporary cement — easy removal",
            summary:
              "Non-eugenol temporary cement designed for easy removal of residual cement on prosthetic appliances or tooth surfaces with predictable setting characteristics.",
            highlights: [
              "Easy removal of residual cement on prosthesis or tooth surface",
              "Mixing time 10–15 seconds; setting time in mouth 3 minutes",
              "Dual cure type; radiopaque",
            ],
            details: [
              {
                title: "Features",
                items: [
                  "Easy to remove residual cement on inner surface of prosthetic appliance or tooth surface",
                  "Mixing time: 10–15 seconds; operation time: within 40 seconds",
                  "Setting time in mouth: 3 minutes",
                  "Dual cure type; radiopaque",
                ],
              },
            ],
            packages: [{ items: ["2 × 5ml (13g) syringes, eco tips"] }],
            description: "Easy-to-use non-eugenol temporary cement with simple cleanup.",
          },
        ],
      },
      {
        id: "temp-cement-implant",
        name: "K. Temp Cement Implant",
        products: [
          {
            id: 16,
            slug: "k-temp-cement-implant",
            name: "K. Temp Cement Implant",
            tagline: "Non-eugenol temporary resin cement for implant",
            summary:
              "Dual-cured non-eugenol temporary resin cement for implant provisional restorations with good adhesive bonding strength and excellent cleanability.",
            highlights: [
              "Dual-cured (light-cured and self-cured)",
              "Good adhesive bonding strength for implant provisionals",
              "Excellent cleaning within 10 minutes",
            ],
            details: [
              {
                title: "Features",
                items: [
                  "Good adhesive bonding strength",
                  "Dual-cured (light-cured, self-cured)",
                  "Compatible with acrylic resin and plastic provisional materials",
                ],
              },
              {
                title: "Suggested Applications",
                items: ["Temporary cementing of temporary prosthetic appliances for implant"],
              },
            ],
            packages: [
              {
                items: [
                  "1 × 5ml (13g) syringe, eco tips",
                  "Operation time: within 1 minute 30 seconds",
                  "Setting time in mouth: 4 minutes",
                ],
              },
            ],
            description: "Temporary cement for implant restorations with dual-cure capability.",
          },
        ],
      },
    ],
  },
  {
    id: "endodontic-materials",
    name: "Endodontic Materials",
    description: "Specialized materials for root canal treatments",
    subcategories: [
      {
        id: "k-sealer",
        name: "K. Sealer",
        products: [
          {
            id: 17,
            slug: "k-sealer",
            name: "K. Sealer",
            tagline: "Root canal sealing material — epoxy resin based",
            summary:
              "Epoxy resin-based root canal sealer with low shrinkage, low solubility, excellent flow properties, and high radiopacity for reliable canal obturation.",
            highlights: [
              "Low shrinkage reduces gapping between sealer and canal wall",
              "1:1 paste-to-paste manual mixing system",
              "High radiopacity with excellent flow into lateral canals",
            ],
            details: [
              {
                title: "Features",
                items: [
                  "Ideal root sealer with low shrinkage reducing gapping between sealer and canal wall",
                  "Low solubility resists breaking down over time",
                  "1:1 paste to paste manual mixing system",
                  "Fast and easy preparation with less waste",
                  "Excellent flow properties reach and seal lateral canals",
                  "Low risk of cytotoxicity with short setting time",
                  "High radiopacity",
                  "Lightly coated gutta percha points with good film thickness",
                ],
              },
            ],
            packages: [{ items: ["Epoxy resin-based root canal sealer"] }],
            description:
              "Epoxy resin root canal sealer based on epoxy resin, zirconium oxide, and calcium cement.",
          },
        ],
      },
      {
        id: "k-bio-ceramic-sealer",
        name: "K. Bio ceramic sealer",
        products: [
          {
            id: 18,
            slug: "k-bio-ceramic-sealer",
            name: "K. Bio ceramic sealer",
            tagline: "Bioceramic MTA-based root canal sealer",
            summary:
              "Bioceramic MTA-based (calcium aluminate-based), non-shrinking root canal sealer for permanent obturation suitable for all gutta-percha techniques.",
            highlights: [
              "MTA-based bioceramic formulation",
              "Non-shrinking sealer for reliable canal obturation",
              "Suitable for all obturation techniques with gutta-percha",
            ],
            details: [
              {
                title: "Features",
                items: [
                  "Bioceramic MTA-based (calcium aluminate-based), non-shrinking root canal sealer",
                  "Used for permanent obturation of root canals",
                  "Suitable for all obturation techniques involving gutta-percha",
                ],
              },
            ],
            packages: [
              {
                items: [
                  "1 syringe × 2g",
                  "20 disposable tips",
                  "1 silicone cap",
                ],
              },
            ],
            description: "Bioceramic root canal sealer for permanent obturation.",
          },
        ],
      },
      {
        id: "k-pex",
        name: "K. Pex.",
        products: [
          {
            id: 19,
            slug: "k-pex",
            name: "K. Pex.",
            tagline: "Calcium hydroxide paste with iodoform",
            summary:
              "Oil-based temporary root canal filling material containing calcium hydroxide and iodoform for intracanal medicament and dressing during multi-visit endodontic treatment.",
            highlights: [
              "Pre-filled syringe system for convenient placement",
              "Radiopaque; antibacterial and bacteriostatic",
              "Easy removal prior to subsequent treatment procedures",
            ],
            details: [
              {
                title: "Benefits",
                items: [
                  "Quiets hot abscess",
                  "Disinfects canal; promotes apexification",
                  "Treats traumatic injuries; radiopaque",
                  "Quick and simple application",
                  "Antibacterial and bacteriostatic",
                ],
              },
              {
                title: "Indications",
                items: [
                  "Intracanal medicament",
                  "Apexification and exudation control",
                  "Periapical lesions and root resorption",
                  "Temporary root filling and perforations",
                  "Underdeveloped pulpless teeth",
                ],
              },
            ],
            packages: [{ items: ["Pre-filled syringe system"] }],
            description:
              "Calcium hydroxide and iodoform paste for temporary intracanal filling and dressing.",
          },
        ],
      },
      {
        id: "k-paste",
        name: "K. Paste",
        products: [
          {
            id: 20,
            slug: "k-paste",
            name: "K. Paste",
            tagline: "Calcium hydroxide paste with barium sulfate",
            summary:
              "Premixed calcium hydroxide and barium sulfate paste for root canal treatment. Water-soluble, radiopaque, and antibacterial for efficient clinical use.",
            highlights: [
              "Water-soluble for easy cleaning and removal",
              "Radiopaque premixed calcium hydroxide paste",
              "Antibacterial formulation reduces operative time",
            ],
            details: [
              {
                title: "Benefits",
                items: [
                  "Water soluble: easy to clean and remove, reduces operative time",
                  "Easy and quick access; radiopaque",
                  "Antibacterial",
                ],
              },
              {
                title: "Characteristics",
                items: [
                  "Premixed calcium hydroxide + barium sulfate paste for root canal treatment",
                  "Temporary root filling",
                  "Root canal filling for primary teeth",
                  "Use after pulp extirpation treatment",
                  "Filling on pulpotomy; temporary pulp capping",
                ],
              },
            ],
            packages: [{ items: ["Endodontic paste for root canal treatment"] }],
            description: "Endodontic paste for root canal treatment and temporary filling.",
          },
        ],
      },
      {
        id: "k-mta",
        name: "K. MTA",
        products: [
          {
            id: 21,
            slug: "k-mta",
            name: "K. MTA",
            tagline: "Mineral trioxide aggregate for endodontics",
            summary:
              "Mineral trioxide aggregate with good biocompatibility, outstanding sealing capabilities, and antibacterial effect for endodontic and pulp therapy applications.",
            highlights: [
              "Good biocompatibility with resistance to washout",
              "Outstanding sealing capabilities",
              "White powder ideal for anterior teeth; antibacterial effect (pH 12)",
            ],
            details: [
              {
                title: "Benefits",
                items: [
                  "Good biocompatibility",
                  "Resists washout",
                  "Easy handling properties",
                  "Outstanding sealing capabilities",
                  "White powder is ideal for anterior teeth",
                  "Antibacterial effect (pH 12)",
                ],
              },
            ],
            packages: [
              {
                items: [
                  "MTA powder 0.5g",
                  "1 mixing pad",
                  "1 spatula",
                ],
              },
            ],
            description: "Mineral trioxide aggregate for endodontic repair and sealing.",
          },
        ],
      },
    ],
  },
  {
    id: "impression-materials",
    name: "Impression Materials",
    description: "Precision materials for accurate dental impressions",
    subcategories: [
      {
        id: "k-light-body",
        name: "K. Light Body",
        products: [
          {
            id: 22,
            slug: "k-light-body",
            name: "K. Light Body",
            tagline: "Vinyl polysiloxane impression material",
            summary:
              "Excellent hydrophilic addition reaction silicone (A type) impression material in light body viscosity for precise crown, bridge, and detailed impression procedures.",
            highlights: [
              "Excellent hydrophilic addition reaction silicone (A type)",
              "Light body viscosity for detailed impressions",
            ],
            details: [
              {
                title: "Features",
                items: [
                  "Excellent dimensional stability",
                  "High tear strength",
                  "Superior hydrophilicity for moist field impressions",
                ],
              },
              {
                title: "Selectable Setting Time",
                items: ["Normal set", "Fast set"],
              },
              {
                title: "Application",
                items: [
                  "Crown and bridge impressions",
                  "Inlay and onlay impressions",
                  "Implant and precision restorative impressions",
                ],
              },
            ],
            packages: [{ items: ["Light body vinyl polysiloxane impression material"] }],
            description: "Light body vinyl polysiloxane impression material for precision impressions.",
          },
        ],
      },
      {
        id: "k-putty-set",
        name: "K. Putty Set",
        products: [
          {
            id: 23,
            slug: "k-putty-set",
            name: "K. Putty Set",
            tagline: "Putty impression material set",
            summary:
              "Professional putty impression material set for initial impressions and tray techniques requiring stable detail reproduction.",
            highlights: [
              "Putty viscosity for tray and preliminary impressions",
              "Compatible with light body wash techniques",
              "Designed for stable detail reproduction",
            ],
            details: [
              {
                title: "Features",
                items: [
                  "Putty consistency for efficient tray loading",
                  "Suitable for crown, bridge, and removable prosthesis impressions",
                  "Formulated for clinical reliability and ease of handling",
                ],
              },
            ],
            packages: [{ items: ["Putty impression material set"] }],
            description: "Putty impression material set for preliminary and tray impressions.",
          },
        ],
      },
      {
        id: "k-alginate",
        name: "K. Alginate",
        products: [
          {
            id: 24,
            slug: "k-alginate",
            name: "K. Alginate",
            tagline: "Alginate impression material",
            summary:
              "Alginate impression material for study models, preliminary impressions, and orthodontic records with smooth mixing and consistent set characteristics.",
            highlights: [
              "Smooth mixing and consistent setting",
              "Suitable for study models and preliminary impressions",
              "Reliable alginate formula for everyday clinical use",
            ],
            details: [
              {
                title: "Features",
                items: [
                  "Easy powder-to-water mixing",
                  "Adequate working time for tray placement",
                  "Suitable for diagnostic and preliminary impressions",
                ],
              },
            ],
            packages: [{ items: ["Alginate impression material"] }],
            description: "Alginate impression material for study models and preliminary impressions.",
          },
        ],
      },
      {
        id: "k-tray-cleaner",
        name: "K. Tray Cleaner",
        products: [
          {
            id: 25,
            slug: "k-tray-cleaner",
            name: "K. Tray Cleaner",
            tagline: "Impression tray cleaning solution",
            summary:
              "Cleaning solution formulated to remove impression material residue from trays and instruments, helping maintain hygiene and prolong tray service life.",
            highlights: [
              "Removes impression material residue from trays",
              "Supports instrument and tray maintenance",
              "Formulated for efficient clinical cleanup",
            ],
            details: [
              {
                title: "Features",
                items: [
                  "Effective removal of set impression material residues",
                  "Suitable for routine tray and instrument cleaning",
                  "Helps maintain impression workflow efficiency",
                ],
              },
            ],
            packages: [{ items: ["Impression tray cleaning solution"] }],
            description: "Impression tray cleaning solution for residue removal and maintenance.",
          },
        ],
      },
      {
        id: "k-sil",
        name: "K. Sil",
        products: [
          {
            id: 26,
            slug: "k-sil",
            name: "K. Sil",
            tagline: "Silicone impression material",
            summary:
              "Silicone impression material for accurate reproduction of soft and hard tissue details in restorative and prosthetic procedures.",
            highlights: [
              "Silicone formulation for detailed impressions",
              "Suitable for crown, bridge, and prosthetic workflows",
              "Designed for consistent clinical performance",
            ],
            details: [
              {
                title: "Features",
                items: [
                  "Accurate detail reproduction",
                  "Suitable for a range of fixed and removable prosthetic impressions",
                  "Formulated for dependable handling properties",
                ],
              },
            ],
            packages: [{ items: ["Silicone impression material"] }],
            description: "Silicone impression material for restorative and prosthetic impressions.",
          },
        ],
      },
    ],
  },
  {
    id: "core-materials",
    name: "Core Materials, Liner, EDTA",
    description: "Essential materials for core build-up and cavity preparation",
    subcategories: [
      {
        id: "k-core",
        name: "K. Core",
        products: [
          {
            id: 27,
            slug: "k-core",
            name: "K. Core",
            tagline: "Flowable core build-up resin",
            summary:
              "Dual-cured flowable core build-up resin with fast deep polymerization, high compressive strength, and strong bond to dentin, enamel, and posts.",
            highlights: [
              "Dual-cured (light cured and self cured)",
              "Polymerization depth 5.1mm in 20 seconds",
              "High compressive strength 310 MPa",
            ],
            details: [
              {
                title: "Features",
                items: [
                  "Dual-cured (light cured, self cured)",
                  "Fast and deep dual-cured (polymerization depth for 20 seconds: 5.1mm)",
                  "High compressive strength (310 MPa)",
                  "High bond strength to dentin, enamel, and post",
                ],
              },
              {
                title: "Suggested Applications",
                items: [
                  "Applicable for all types of core build-ups",
                  "Permanent restoration of tooth damage for therapeutic purpose",
                ],
              },
            ],
            packages: [{ items: ["2 × 5ml (10g) syringes, mixing tips, eco tips"] }],
            description: "Dual-cured flowable core build-up material.",
          },
        ],
      },
      {
        id: "k-base-liner",
        name: "K. Base Liner",
        products: [
          {
            id: 28,
            slug: "k-base-liner",
            name: "K. Base Liner",
            tagline: "Light cured cavity liner and pulp-capping material",
            summary:
              "Light-cured cavity liner and pulp-capping material applied before restorative placement. Contains calcium hydroxide in a urethane dimethacrylate base with low shrinkage.",
            highlights: [
              "Pulp-capping and cavity liner material",
              "Contains calcium hydroxide in urethane dimethacrylate base",
              "Low shrinkage when light-cured",
            ],
            details: [
              {
                title: "Features",
                items: [
                  "Pulp-capping material",
                  "Protects dental pulp for fillings; high strength",
                  "Contains calcium hydroxide in a urethane dimethacrylate base",
                  "Low shrinkage when light-cured",
                ],
              },
              {
                title: "Suggested Applications",
                items: [
                  "Cavity liner and base material prior to placement of restorative materials",
                  "Pulp-capping",
                ],
              },
            ],
            packages: [{ items: ["2 × 1.2ml syringes, tips"] }],
            description:
              "Light-cured cavity liner and pulp-capping material before restorative placement.",
          },
        ],
      },
      {
        id: "k-edta",
        name: "K. EDTA",
        products: [
          {
            id: 29,
            slug: "k-edta",
            name: "K. EDTA",
            tagline: "Root canal preparation EDTA",
            summary:
              "Root canal cleaner with unique formulation of glycol and urea peroxide. Excellent chelation removes inorganic compounds and provides lubrication for instrument handling.",
            highlights: [
              "Excellent chelation removes inorganic compounds",
              "Lubrication for easy instrument handling",
              "Low viscosity creamy type with high flowability",
            ],
            details: [
              {
                title: "Features",
                items: [
                  "Root canal cleaner with unique formulation of glycol and urea peroxide",
                  "Excellent chelation removes inorganic compound",
                  "Lubrication provides easy instrument handling when root canal is shaped",
                  "Tooth-colored pigment produces no pigmentation",
                  "Perfect removal is possible after application",
                  "Low viscosity creamy type provides high flowability and easy spraying into root canal",
                ],
              },
              {
                title: "Suggested Applications",
                items: [
                  "Cleaning and preparation of root canal",
                  "Expansion of root canal and removal of smear layer",
                ],
              },
            ],
            packages: [{ items: ["2 × 6g syringes, disposable tips"] }],
            description: "EDTA solution for root canal cleaning and smear layer removal.",
          },
        ],
      },
    ],
  },
  {
    id: "prevention-protection",
    name: "Prevention & protection Pumice",
    description: "Preventive care and protection products",
    subcategories: [
      {
        id: "k-fluoride-varnish",
        name: "K. Fluoride Varnish",
        products: [
          {
            id: 44,
            slug: "k-fluoride-varnish",
            name: "K. Fluoride Varnish",
            tagline: "5% sodium fluoride varnish with TCP and vitamin E",
            summary:
              "Flavored, xylitol-sweetened 5% sodium fluoride varnish with tricalcium phosphate and vitamin E in a natural pine resin carrier for caries prevention and hypersensitivity relief.",
            highlights: [
              "5% sodium fluoride with TCP for continuous fluoride release",
              "High adsorptive power for fast tooth surface coating",
              "Fresh sweet apple flavor for pediatric applications",
            ],
            details: [
              {
                title: "Features",
                items: [
                  "Contains high-enriched fluoride with long-lasting fluoride release",
                  "Contains tricalcium phosphate (TCP) for continuous and effective fluoride release",
                  "High adsorptive power for fast tooth surface coating",
                  "Long-lasting sealing of exposed dentinal tubules for relief of hypersensitivity",
                  "Transparency provides natural tooth color for esthetic effect",
                  "Fresh sweet apple flavor for easy access to children",
                ],
              },
              {
                title: "Suggested Applications",
                items: ["Caries prevention and hypersensitive tooth treatment"],
              },
            ],
            packages: [
              {
                title: "10 unit-dose package",
                items: [
                  "10 unit doses (varnish and applicator brush contained in each unit dose)",
                ],
              },
              {
                title: "100 unit-dose package",
                items: [
                  "100 unit doses (varnish and applicator brush contained in each unit dose)",
                ],
              },
            ],
            description:
              "Professional 5% sodium fluoride varnish with TCP for caries prevention and sensitivity.",
          },
          {
            id: 30,
            slug: "k-varnish",
            name: "K. Varnish",
            tagline: "5% sodium fluoride varnish with vitamin E",
            summary:
              "Flavored, xylitol-sweetened 5% sodium fluoride varnish with vitamin E in a natural resin carrier for effective caries prevention and hypersensitive tooth treatment.",
            highlights: [
              "Excellent flowability with long-lasting fluoride release",
              "Contains xylitol for effective caries prevention",
              "Natural orange flavor reduces unpleasant resin taste",
            ],
            details: [
              {
                title: "Features",
                items: [
                  "Excellent flowability for easy application; long-lasting fluoride release",
                  "High adsorptive power for fast tooth surface coating",
                  "Contains xylitol for effective caries prevention",
                  "Long-lasting sealing of exposed dentinal tubules for relief of hypersensitivity",
                  "No feeling of irritation in the mouth after application",
                  "Light yellow color indicates application, becomes tooth color within 5 minutes",
                  "Fresh natural orange flavor reduces unpleasant smell and bitter taste of pine resin",
                ],
              },
              {
                title: "Suggested Applications",
                items: ["Caries prevention and hypersensitive tooth treatment"],
              },
            ],
            packages: [
              {
                title: "10 unit-dose package",
                items: [
                  "10 unit doses (varnish and applicator brush contained in each unit dose)",
                ],
              },
              {
                title: "100 unit-dose package",
                items: [
                  "100 unit doses (varnish and applicator brush contained in each unit dose)",
                ],
              },
            ],
            description: "Professional fluoride varnish for caries prevention and sensitivity relief.",
          },
        ],
      },
      {
        id: "k-fluoride-gel",
        name: "K. Fluoride Gel",
        products: [
          {
            id: 31,
            slug: "k-fluoride-gel-strawberry",
            name: "K. Fluoride Gel - Strawberry",
            tagline: "Fluoride gel for tray application — strawberry flavor",
            summary:
              "Fluoride gel containing fluoride compounds, xylitol, and vitamin E for caries prevention when used with a fluoride gel tray. Strawberry flavor.",
            highlights: [
              "Contains fluoride ion (1.23%), xylitol, and vitamin E",
              "Does not flow down when filled in tray",
              "80% effective at 1 minute; 100% effective at 4 minutes of biting",
            ],
            details: [
              {
                title: "Features",
                items: [
                  "Natural dental care including caries prevention",
                  "Contains fluoride ion (1.23%), xylitol, and vitamin E",
                  "Does not flow down when the gel is filled in the tray",
                  "Effectiveness varies by biting time (1 minute: 80% effective, 4 minutes: 100% effective)",
                ],
              },
              {
                title: "Suggested Applications",
                items: ["Caries prevention using a fluoride gel tray"],
              },
            ],
            packages: [{ items: ["1 × 500ml bottle — Strawberry flavor"] }],
            description: "Fluoride gel with strawberry flavor for tray-based caries prevention.",
          },
          {
            id: 32,
            slug: "k-fluoride-gel-orange",
            name: "K. Fluoride Gel - Orange",
            tagline: "Fluoride gel for tray application — orange flavor",
            summary:
              "Fluoride gel containing fluoride compounds, xylitol, and vitamin E for caries prevention when used with a fluoride gel tray. Orange flavor.",
            highlights: [
              "Contains fluoride ion (1.23%), xylitol, and vitamin E",
              "Stable gel viscosity in application trays",
              "Effective caries prevention with timed tray application",
            ],
            details: [
              {
                title: "Features",
                items: [
                  "Natural dental care including caries prevention",
                  "Contains fluoride ion (1.23%), xylitol, and vitamin E",
                  "Does not flow down when the gel is filled in the tray",
                  "Effectiveness varies by biting time (1 minute: 80% effective, 4 minutes: 100% effective)",
                ],
              },
              {
                title: "Suggested Applications",
                items: ["Caries prevention using a fluoride gel tray"],
              },
            ],
            packages: [{ items: ["1 × 500ml bottle — Orange flavor"] }],
            description: "Fluoride gel with orange flavor for tray-based caries prevention.",
          },
          {
            id: 33,
            slug: "k-fluoride-gel-peach",
            name: "K. Fluoride Gel - Peach",
            tagline: "Fluoride gel for tray application — peach flavor",
            summary:
              "Fluoride gel containing fluoride compounds, xylitol, and vitamin E for caries prevention when used with a fluoride gel tray. Peach flavor.",
            highlights: [
              "Contains fluoride ion (1.23%), xylitol, and vitamin E",
              "Stable gel viscosity in application trays",
              "Effective caries prevention with timed tray application",
            ],
            details: [
              {
                title: "Features",
                items: [
                  "Natural dental care including caries prevention",
                  "Contains fluoride ion (1.23%), xylitol, and vitamin E",
                  "Does not flow down when the gel is filled in the tray",
                  "Effectiveness varies by biting time (1 minute: 80% effective, 4 minutes: 100% effective)",
                ],
              },
              {
                title: "Suggested Applications",
                items: ["Caries prevention using a fluoride gel tray"],
              },
            ],
            packages: [{ items: ["1 × 500ml bottle — Peach flavor"] }],
            description: "Fluoride gel with peach flavor for tray-based caries prevention.",
          },
        ],
      },
      {
        id: "k-fluoride-gel-tray",
        name: "K. Fluoride Gel Tray",
        products: [
          {
            id: 34,
            slug: "k-fluoride-gel-tray-small",
            name: "K. Fluoride Gel Tray - Small",
            tagline: "Disposable dual-arch tray — small",
            summary:
              "Disposable dual-arch tray designed for application of fluoride gel. Soft rubber construction minimizes resistance and irritation during treatment.",
            highlights: [
              "Dual arch-shaped tray for lower and upper teeth",
              "Soft rubber minimizes feeling of resistance or irritation",
              "Curved grip for good grip feeling and tray folding",
            ],
            details: [
              {
                title: "Features",
                items: [
                  "Dual arch-shaped tray for lower and upper teeth",
                  "No easy outflow from the tray when fluoride gel is filled in",
                  "Made of harmless soft rubber to minimize resistance or irritation",
                  "Curved grip for good grip feeling and tray folding",
                ],
              },
              {
                title: "Suggested Applications",
                items: ["Application of fluoride gel for caries prevention"],
              },
            ],
            packages: [
              { items: ["25 pcs / small box", "100 pcs / big box (4 small boxes contained)"] },
            ],
            description: "Small disposable dual-arch tray for fluoride gel application.",
          },
          {
            id: 35,
            slug: "k-fluoride-gel-tray-medium",
            name: "K. Fluoride Gel Tray - Medium",
            tagline: "Disposable dual-arch tray — medium",
            summary:
              "Medium-size disposable dual-arch tray for fluoride gel application with soft rubber construction and secure gel retention.",
            highlights: [
              "Medium dual-arch tray for standard arch sizes",
              "Prevents gel outflow during application",
              "Soft rubber for patient comfort",
            ],
            details: [
              {
                title: "Features",
                items: [
                  "Dual arch-shaped tray for lower and upper teeth",
                  "No easy outflow from the tray when fluoride gel is filled in",
                  "Made of harmless soft rubber to minimize resistance or irritation",
                  "Curved grip for good grip feeling and tray folding",
                ],
              },
              {
                title: "Suggested Applications",
                items: ["Application of fluoride gel for caries prevention"],
              },
            ],
            packages: [
              { items: ["25 pcs / small box", "100 pcs / big box (4 small boxes contained)"] },
            ],
            description: "Medium disposable dual-arch tray for fluoride gel application.",
          },
          {
            id: 36,
            slug: "k-fluoride-gel-tray-large",
            name: "K. Fluoride Gel Tray - Large",
            tagline: "Disposable dual-arch tray — large",
            summary:
              "Large disposable dual-arch tray for fluoride gel application with soft rubber construction and secure gel retention for broader arch forms.",
            highlights: [
              "Large dual-arch tray for broader arch sizes",
              "Prevents gel outflow during application",
              "Soft rubber for patient comfort",
            ],
            details: [
              {
                title: "Features",
                items: [
                  "Dual arch-shaped tray for lower and upper teeth",
                  "No easy outflow from the tray when fluoride gel is filled in",
                  "Made of harmless soft rubber to minimize resistance or irritation",
                  "Curved grip for good grip feeling and tray folding",
                ],
              },
              {
                title: "Suggested Applications",
                items: ["Application of fluoride gel for caries prevention"],
              },
            ],
            packages: [
              { items: ["25 pcs / small box", "100 pcs / big box (4 small boxes contained)"] },
            ],
            description: "Large disposable dual-arch tray for fluoride gel application.",
          },
        ],
      },
    ],
  },
  {
    id: "k-pumice",
    name: "K. Pumice",
    description: "Professional pumice products for polishing",
    subcategories: [
      {
        id: "k-pumice-bottle",
        name: "K. Pumice",
        products: [
          {
            id: 45,
            slug: "k-pumice",
            name: "K. Pumice",
            tagline: "Material for grinding and polishing of teeth or prosthesis",
            summary:
              "Professional pumice for grinding and polishing teeth or prostheses. Contains phosphated fluoride with nano-sized natural particles for fine abrasion without pigmentation.",
            highlights: [
              "Phosphated fluoride (1.23% fluoride ion) contained",
              "Nano-sized natural particles for fine abrasion",
              "Sweet strawberry and natural mint flavors",
            ],
            details: [
              {
                title: "Features",
                items: [
                  "Enables polishing and smoothing of rough surfaces on tooth or prosthesis",
                  "Phosphated fluoride (1.23% fluoride ion) is contained",
                  "Optimal viscosity leaves fewer lumps and provides fast grinding",
                  "Nano-sized natural particles provide fine abrasion",
                  "No pigmentation after application",
                  "Sweet strawberry and natural mint flavors",
                ],
              },
              {
                title: "Suggested Applications",
                items: ["Grinding and polishing of teeth or prosthesis"],
              },
            ],
            packages: [{ items: ["1 × 340g bottle"] }],
            description: "Professional pumice bottle for grinding and polishing teeth or prostheses.",
          },
        ],
      },
      {
        id: "pumice-paste-with-fluoride",
        name: "Pumice Paste (with fluoride)",
        products: [
          {
            id: 37,
            slug: "pumice-paste-with-fluoride",
            name: "Pumice Paste (with fluoride)",
            tagline: "Professional pumice paste with fluoride",
            summary:
              "Professional pumice paste with fluoride for polishing teeth and prostheses. Fine abrasion with fluoride enrichment for preventive polishing procedures.",
            highlights: [
              "Contains fluoride for preventive polishing",
              "Fine abrasion for smooth tooth and prosthesis surfaces",
              "Professional formulation for clinical prophylaxis",
            ],
            details: [
              {
                title: "Features",
                items: [
                  "Polishes and smooths rough surfaces of tooth or prosthesis",
                  "Fluoride-enriched pumice paste for preventive care",
                  "Optimal viscosity for efficient clinical polishing",
                ],
              },
              {
                title: "Suggested Applications",
                items: ["Grinding and polishing of teeth or prosthesis"],
              },
            ],
            packages: [{ items: ["Pumice paste with fluoride"] }],
            description: "Professional pumice paste with fluoride for polishing.",
          },
        ],
      },
      {
        id: "pumice-paste-without-fluoride",
        name: "Pumice Paste (without fluoride)",
        products: [
          {
            id: 38,
            slug: "pumice-paste-without-fluoride",
            name: "Pumice Paste (without fluoride)",
            tagline: "Professional pumice paste without fluoride",
            summary:
              "Professional pumice paste without fluoride for polishing teeth and prostheses where fluoride-free prophylaxis is preferred.",
            highlights: [
              "Fluoride-free polishing formulation",
              "Fine abrasion for smooth tooth and prosthesis surfaces",
              "Professional formulation for clinical prophylaxis",
            ],
            details: [
              {
                title: "Features",
                items: [
                  "Polishes and smooths rough surfaces of tooth or prosthesis",
                  "Fluoride-free pumice paste for selective clinical use",
                  "Optimal viscosity for efficient clinical polishing",
                ],
              },
              {
                title: "Suggested Applications",
                items: ["Grinding and polishing of teeth or prosthesis"],
              },
            ],
            packages: [{ items: ["Pumice paste without fluoride"] }],
            description: "Professional pumice paste without fluoride for polishing.",
          },
        ],
      },
    ],
  },
  {
    id: "tooth-whitening",
    name: "Tooth Whitening Technique",
    description: "Professional tooth whitening systems",
    subcategories: [
      {
        id: "k-bleaching",
        name: "K.Bleaching",
        products: [
          {
            id: 39,
            slug: "k-bleaching-kit-1",
            name: "K.Bleaching Kit 1",
            tagline: "Professional tooth whitening kit — basic",
            summary:
              "Water-soluble monomer gel-type bleaching system. A single application can generate excellent whitening results with appropriate viscosity to prevent rundown during treatment.",
            highlights: [
              "Appropriate viscosity prevents rundown during treatment",
              "Superb penetration power for excellent whitening results",
              "Convenient packaging for single treatment sessions",
            ],
            details: [
              {
                title: "Features",
                items: [
                  "Contains water-soluble monomer for gel type bleaching",
                  "A single application can generate excellent result",
                  "Appropriate viscosity prevents rundown during treatment",
                  "Superb penetration power generates excellent whitening result",
                  "Convenient packaging for single treatment",
                  "Excellent color match with natural tooth",
                ],
              },
            ],
            packages: [
              {
                title: "Whitening Kit 1",
                items: [
                  "10 × 1.5ml whitening agent jars",
                  "10 × 3.7g H2O2 bottles",
                  "Disposable spatulas and disposable brushes",
                ],
              },
            ],
            description: "Professional tooth whitening kit — basic configuration.",
          },
          {
            id: 40,
            slug: "k-bleaching-kit-2",
            name: "K.Bleaching Kit 2",
            tagline: "Professional tooth whitening kit — advanced",
            summary:
              "Advanced whitening kit with gel-type bleaching agent, convenient single-treatment packaging, and included dam syringes for gingival protection during in-office whitening.",
            highlights: [
              "Gel-type bleaching with excellent penetration",
              "Includes dam syringes and application accessories",
              "Compact case for chairside whitening procedures",
            ],
            details: [
              {
                title: "Features",
                items: [
                  "Contains water-soluble monomer for gel type bleaching",
                  "Appropriate viscosity prevents rundown during treatment",
                  "Superb penetration power generates excellent whitening result",
                  "Convenient packaging for single treatment",
                ],
              },
            ],
            packages: [
              {
                title: "Whitening Kit 2",
                items: [
                  "1 × 1.5ml whitening agent jar",
                  "1 × 3.7g H2O2 bottle",
                  "2 disposable spatulas, 2 disposable brushes",
                  "2 syringe dam, case",
                ],
              },
            ],
            description: "Professional tooth whitening kit — advanced configuration.",
          },
        ],
      },
    ],
  },
  {
    id: "other-products",
    name: "Other products",
    description: "Essential dental accessories and supplies",
    subcategories: [
      {
        id: "k-cord",
        name: "K. Cord (Retraction Cord)",
        products: [
          {
            id: 41,
            slug: "k-cord",
            name: "K. Cord",
            tagline: "Knitted gingival retraction cord",
            summary:
              "100% cotton knitted retraction cord formed into interlocking loops that exert gentle continuous outward force. Optimal tissue displacement occurs in 3–8 minutes.",
            highlights: [
              "Knitted design for rapid tissue displacement",
              "Compresses upon packing then expands for optimal retraction",
              "Available with or without epinephrine",
            ],
            details: [
              {
                title: "Features",
                items: [
                  "Made of 100% cotton, knitted into tiny loops forming interlocking chains",
                  "Gentle continuous outward force after placement",
                  "Original small knitted cord for detailed margins and quality impressions",
                  "Facilitates easy packing and stays placed better than twisted or braided cord",
                  "Does not entangle in diamond bur",
                  "Bright colors facilitate easy location and removal",
                  "High carbon steel blade ensures a clean cut",
                ],
              },
              {
                title: "Suggested Applications",
                items: [
                  "Gingival retraction for impressions",
                  "Do not use with ferric sulfate solutions including hemostatics",
                ],
              },
            ],
            packages: [{ items: ["Gingival retraction cord"] }],
            description: "Gingival retraction cord for impressions and detailed margins.",
          },
        ],
      },
      {
        id: "k-oil",
        name: "K. Oil (lubricant Handpieces)",
        products: [
          {
            id: 42,
            slug: "k-oil",
            name: "K. Oil",
            tagline: "Handpiece lubricant spray",
            summary:
              "Handpiece lubricant that cleans without clotted residue. Compatible with Kavo, W&H, NSK, and Bien Air handpieces with high-compression spray for uniform bearing coating.",
            highlights: [
              "Cleans well with no clotted residue",
              "Alcoholic ingredient provides disinfection; low odor in 2–3 seconds",
              "Compatible with major handpiece brands",
            ],
            details: [
              {
                title: "Features",
                items: [
                  "Provides excellent cleaning for high and low speed handpieces",
                  "Oil does not clog; less sticky with no residue",
                  "Alcoholic ingredient provides superior disinfection and high volatility",
                  "Compatible with Kavo, W&H, NSK, and Bien Air handpieces",
                  "High compression air enables accurate spraying and uniform coating film on bearings",
                ],
              },
              {
                title: "Suggested Applications",
                items: [
                  "Shake well before use",
                  "After disconnecting air turbine handpiece from tubing coupler, tighten spray nozzle to handpiece",
                  "Lubricate for 2–3 seconds until oil comes out",
                ],
              },
            ],
            packages: [{ items: ["Spray 520ml × 1"] }],
            description: "Lubricant oil for dental handpieces with cleaning action.",
          },
        ],
      },
      {
        id: "k-dam",
        name: "K. Dam",
        products: [
          {
            id: 43,
            slug: "k-dam",
            name: "K. Dam",
            tagline: "Light cured gum-protecting material for tooth whitening",
            summary:
              "Light-cured gingival protection resin that shields gum tissue from bleaching agents during tooth whitening. Optimal viscosity with short 15-second light-curing time.",
            highlights: [
              "Optimal viscosity for easy handling",
              "Short light-curing time (15 seconds)",
              "Easy to remove after treatment",
            ],
            details: [
              {
                title: "Features",
                items: [
                  "Light cured gum-protecting material for tooth whitening",
                  "Gingival protection resin protects gum damage caused by bleaching agents",
                  "Optimal viscosity for easy handling",
                  "Short light-curing time (15 seconds)",
                  "Adequate flow and easy usability",
                  "Easy to remove after the treatment",
                ],
              },
            ],
            packages: [{ items: ["5 × 1.2ml syringes, disposable tips"] }],
            description: "Rubber dam-style gingival barrier for tooth whitening procedures.",
          },
        ],
      },
    ],
  },
];

function buildProductsBySlug(
  categories: EquipmentCategory[],
): Record<string, EquipmentProductWithContext> {
  const result: Record<string, EquipmentProductWithContext> = {};
  for (const category of categories) {
    for (const subcategory of category.subcategories) {
      for (const product of subcategory.products) {
        result[product.slug] = {
          ...product,
          categoryId: category.id,
          subcategoryId: subcategory.id,
          categoryName: category.name,
        };
      }
    }
  }
  return result;
}

export const equipmentProductsBySlug = buildProductsBySlug(equipmentCategoriesSource);

export function getEquipmentProductBySlug(
  slug: string,
): EquipmentProductWithContext | undefined {
  return equipmentProductsBySlug[slug];
}
