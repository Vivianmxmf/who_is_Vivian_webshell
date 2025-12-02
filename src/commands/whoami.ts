const whoamiObj = {
  "message": [
    [
      "In the friction between story and system,",
      "I am the dissenting voice in the machine,",
      "challenging the rigid script - "
    ],
    [
      "Amidst the labyrinth of branching narratives,",
      "I route the chaos of improvisation,",
      "seeking the coherence within - "
    ],
    [
      "In the chorus of synthetic ensembles,",
      "I am the conductor of fragmented models,",
      "synthesizing the collective logic - "
    ],
    [
      "As a lone juror in the digital court,",
      "I hold my ground against tireless reason,",
      "deliberating the human value - "
    ],
    [
      "In the tapestry of algorithmic elegance,",
      "I weave the bridge between raw compute and soul,",
      "compiling the final query - "
    ]
  ]
}

export const createWhoami = () : string[] => {
  const whoami : string[] = [];  
  const r = Math.floor(Math.random() * whoamiObj.message.length);
  whoami.push("<br>");

  whoamiObj.message[r].forEach((ele, idx) => {
    if (idx === whoamiObj.message[r].length - 1) {
      ele += "<span class='command'>who am I?</span>";
    }
    whoami.push(ele);
  });

  whoami.push("<br>");

  return whoami
}
