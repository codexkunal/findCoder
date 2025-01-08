const runFlow = async (req, res) => {
    const BASE_API_URL = "https://api.langflow.astra.datastax.com";
    const LANGFLOW_ID = "759584ab-aaf4-47ad-a6b1-8fd64bb42c87";
    const FLOW_ID = "aad66499-4067-49aa-a38c-4392dc1753e5";
    const ENDPOINT = "chatbot";
    const APPLICATION_TOKEN = "AstraCS:MXbQgBbmnMrMgBkiPwahMYZR:f03e078957b65d22edffe4eb8618c9d11ab3a7211f7f64a86e8de0c71b74c4fb";

    const {message} = req.body
    const apiUrl = `${BASE_API_URL}/lf/${LANGFLOW_ID}/api/v1/run/${ENDPOINT}`;
    const payload = {
        input_value: message,
        output_type: "chat",
        input_type: "chat",
    };
    const headers = {
        Authorization: `Bearer ${APPLICATION_TOKEN}`,
        "Content-Type": "application/json",
    };

    try {
        console.log("started");
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const errorDetails = await response.json();
            throw new Error(
                `${response.status} ${response.statusText} - ${JSON.stringify(errorDetails)}`
            );
        }

        const data = await response.json();
        console.log(data.outputs[0].outputs);
        
        return res.status(200).json(data.outputs[0].outputs[0].results.message.text);
    } catch (error) {
        console.error("Error calling API:", error.message);
        throw error;
    }
}

export {runFlow};