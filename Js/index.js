// index.js
export default {
    async fetch(request, env, ctx) {
      const data = await request.json();
  
      const token = env.GITHUB_TOKEN;
      const username = "Abdevlopers";
      const repo = "MyShop";
      const path = "data/cards.json";
  
      // جلب الملف الحالي من GitHub
      const getRes = await fetch(`https://api.github.com/repos/${username}/${repo}/contents/${path}`, {
        headers: { Authorization: `token ${token}` }
      });
      const getJson = await getRes.json();
      const sha = getJson.sha;
      const existing = getJson.content ? JSON.parse(atob(getJson.content)) : [];
  
      // تحديث المحتوى
      existing.push(data);
      const content = btoa(JSON.stringify(existing, null, 2));
  
      // إرسال التحديث
      const putRes = await fetch(`https://api.github.com/repos/${username}/${repo}/contents/${path}`, {
        method: "PUT",
        headers: {
          Authorization: `token ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: "تمت إضافة بطاقة جديدة",
          content: content,
          sha: sha
        })
      });
  
      return new Response("تم حفظ البيانات بنجاح", { status: 200 });
    }
  }
  