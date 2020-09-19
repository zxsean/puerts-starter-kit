using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class splash : MonoBehaviour
{
	private RectTransform canvasTrans;
	private RectTransform rawImgTrans;
	private RawImage rawImg;

	private void Awake()
	{
		rawImgTrans = transform.Find("Canvas/RawImage").transform as RectTransform;
		canvasTrans = transform.Find("Canvas").transform as RectTransform;
		rawImg = rawImgTrans.GetComponent<RawImage>();
		rawImgTrans.localPosition = Vector3.zero;
	}

	private void Update()
	{
		Vector2 screenWH = new Vector2(canvasTrans.sizeDelta.x, canvasTrans.sizeDelta.y);
		Vector2 textureWH = new Vector2(rawImg.texture.width, rawImg.texture.height);
		Vector2 result2 = screenWH / textureWH;
		var scalar = Mathf.Max(result2.x, result2.y);
		rawImgTrans.localScale = new Vector3(scalar, scalar, 1);
	}
}